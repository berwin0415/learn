#define STB_IMAGE_IMPLEMENTATION

#include "stb_image.h"

#include <OpenGL/gl3.h>

#include <iostream>

#include <vector>

#include <fstream>

const char *vertexShaderSource = "#version 330 core\n"

                                 "layout (location = 0) in vec2 vertex;\n"

                                 "layout (location = 1) in vec2 texCoord;\n"

                                 "out vec2 TexCoord;\n"

                                 "void main()\n"

                                 "{\n"

                                 " gl_Position = vec4(vertex, 0.0, 1.0);\n"

                                 " TexCoord = texCoord;\n"

                                 "}\0";

const char *fragmentShaderSource = "#version 330 core\n"

                                   "in vec2 TexCoord;\n"

                                   "out vec4 color;\n"

                                   "uniform sampler2D ourTexture;\n"

                                   "void main()\n"

                                   "{\n"

                                   " color = texture(ourTexture, vec2(TexCoord.x, 1.0 - TexCoord.y));\n" // Flip the texture vertically

                                   "}\n\0";

bool saveImage(const std::string &filename, const std::vector<unsigned char> &image, int width, int height);

void processImage(const std::string &inputImagePath, const std::string &outputImagePath);

int main()
{

    processImage("input.jpg", "output.jpg");

    return 0;
}

void processImage(const std::string &inputImagePath, const std::string &outputImagePath)
{

    int width, height, nrChannels;

    unsigned char *data = stbi_load(inputImagePath.c_str(), &width, &height, &nrChannels, 0);

    if (!data)
    {

        std::cerr << "Failed to load image" << std::endl;

        return;
    }

    GLuint VAO, VBO, EBO;

    GLuint texture, framebuffer, renderbuffer;

    GLuint vertexShader, fragmentShader, shaderProgram;

    // Initialize OpenGL context (since we are not using any window system, we'll use a dummy context)

    CGLPixelFormatAttribute attributes[] = {

        kCGLPFADisplayMask,

        (CGLPixelFormatAttribute)CGDisplayIDToOpenGLDisplayMask(kCGDirectMainDisplay),

        (CGLPixelFormatAttribute)0

    };

    CGLPixelFormatObj pix;

    GLint num;

    CGLChoosePixelFormat(attributes, &pix, &num);

    CGLContextObj context;

    CGLCreateContext(pix, nullptr, &context);

    CGLSetCurrentContext(context);

    // Build and compile shaders

    vertexShader = glCreateShader(GL_VERTEX_SHADER);

    glShaderSource(vertexShader, 1, &vertexShaderSource, nullptr);

    glCompileShader(vertexShader);

    fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);

    glShaderSource(fragmentShader, 1, &fragmentShaderSource, nullptr);

    glCompileShader(fragmentShader);

    shaderProgram = glCreateProgram();

    glAttachShader(shaderProgram, vertexShader);

    glAttachShader(shaderProgram, fragmentShader);

    glLinkProgram(shaderProgram);

    glDeleteShader(vertexShader);

    glDeleteShader(fragmentShader);

    float vertices[] = {

        // positions // texCoords

        1.0f, 1.0f, 1.0f, 1.0f, // top right

        1.0f, -1.0f, 1.0f, 0.0f, // bottom right

        -1.0f, -1.0f, 0.0f, 0.0f, // bottom left

        -1.0f, 1.0f, 0.0f, 1.0f // top left

    };

    unsigned int indices[] = {

        0, 1, 3,

        1, 2, 3

    };

    glGenVertexArrays(1, &VAO);

    glGenBuffers(1, &VBO);

    glGenBuffers(1, &EBO);

    glBindVertexArray(VAO);

    glBindBuffer(GL_ARRAY_BUFFER, VBO);

    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);

    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

    glVertexAttribPointer(0, 2, GL_FLOAT, GL_FALSE, 4 * sizeof(float), (void *)0);

    glEnableVertexAttribArray(0);

    glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 4 * sizeof(float), (void *)(2 * sizeof(float)));

    glEnableVertexAttribArray(1);

    glGenTextures(1, &texture);

    glBindTexture(GL_TEXTURE_2D, texture);

    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, width, height, 0, GL_RGB, GL_UNSIGNED_BYTE, data);

    glGenerateMipmap(GL_TEXTURE_2D);

    // Set up the framebuffer

    glGenFramebuffers(1, &framebuffer);

    glBindFramebuffer(GL_FRAMEBUFFER, framebuffer);

    glGenRenderbuffers(1, &renderbuffer);

    glBindRenderbuffer(GL_RENDERBUFFER, renderbuffer);

    glRenderbufferStorage(GL_RENDERBUFFER, GL_RGB, width, height);

    glFramebufferRenderbuffer(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0, GL_RENDERBUFFER, renderbuffer);

    glBindFramebuffer(GL_FRAMEBUFFER, framebuffer);

    glViewport(0, 0, width, height);

    glUseProgram(shaderProgram);

    glBindVertexArray(VAO);

    glBindTexture(GL_TEXTURE_2D, texture);

    glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);

    std::vector<unsigned char> outputImage(width * height * nrChannels);

    glReadPixels(0, 0, width, height, GL_RGB, GL_UNSIGNED_BYTE, outputImage.data());

    saveImage(outputImagePath, outputImage, width, height);

    stbi_image_free(data);
}

bool saveImage(const std::string &filename, const std::vector<unsigned char> &image, int width, int height)
{

    std::ofstream outFile(filename, std::ios::binary);

    if (!outFile)
    {

        std::cerr << "Unable to create output file" << std::endl;

        return false;
    }

    // Write a very basic PPM file (P6 format)

    outFile << "P6\n"
            << width << " " << height << "\n255\n";

    outFile.write(reinterpret_cast<const char *>(image.data()), image.size());

    return true;
}
cmake_minimum_required(VERSION 3.0.0)
project(test1 VERSION 0.1.0 LANGUAGES C CXX)

add_executable(test1 main.cpp)

include(CTest)
enable_testing()

set(CPACK_PROJECT_NAME ${PROJECT_NAME})
set(CPACK_PROJECT_VERSION ${PROJECT_VERSION})
include(CPack)

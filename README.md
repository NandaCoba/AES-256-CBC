# AES-256-CBC Encryption and Decryption in Node.js

This project demonstrates how to use AES-256-CBC encryption and decryption in Node.js using the built-in `crypto` module. AES (Advanced Encryption Standard) is a symmetric encryption algorithm, and CBC (Cipher Block Chaining) is a mode of operation that makes AES more secure by adding an initialization vector (IV).

## Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [How it Works](#how-it-works)
- [License](#license)

## Overview

AES-256-CBC encryption is a widely used symmetric encryption algorithm. In AES-256, the key is 256 bits (32 bytes) long. The CBC mode adds randomness to each encryption block by using an initialization vector (IV).

In this implementation, we will:
1. Encrypt a string using AES-256-CBC.
2. Decrypt the encrypted string using the same key and IV.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system. You can download it from [here](https://nodejs.org/).

### Installing

Clone this repository to your local machine:

```bash
git clone https://github.com/NandaCoba/AES-256-CBC.git
cd AES-256-CBC

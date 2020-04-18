const sharp = require('sharp')


sharp('original.png')
    .resize(80)
    .grayscale()
    .toFile('honey_I_resized_the_image.png')
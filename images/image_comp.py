from PIL import Image

file_path = Image.open('/Users/luke/Desktop/Please/images/IMG_1284.jpg')
print(file_path.size)
# file_path = file_path.resize((400,300), Image.ANTIALIAS)
# file_path.save('/Users/luke/Desktop/Please/images/IMG_1284Small.jpg', quality=95)
file_path.save('/Users/luke/Desktop/Please/images/IMG_1284Small.jpg', optimize=True, quality=30)

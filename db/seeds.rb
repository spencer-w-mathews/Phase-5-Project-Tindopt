# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

s1= Shelter.create!(username: "KC_Pet_Project", password: "admin")

u1= User.create!(username: "Spencer", password: "admin")


a1 = Animal.create!(name: "Abel", image: "https://g.petango.com/photos/1287/2ac87fc4-c96e-472f-a8e0-5a39da20d3ff.jpg", location: "KC", species: "Dog", breed: "Pitbull", age: "1 year 6 months", gender: "Male", size: "Medium", weight:"39 pounds", color: "Blue/fawn", fixed: "Yes", housetrained: "Unknown", url: "https://kcpetproject.org/animal-details/?aid=50863946&cid=11&tid=Dog#.Yw-tvnbMK5c", shelter_id: 1)
a2 = Animal.create!(name: "Acute", image: "https://g.petango.com/photos/1287/393ee5f5-d485-4aff-b9ef-668ab534b055.jpg", location: "KC", species: "Cat", breed: "Donestic Shorthair", age: "2 months", gender: "Female", size: "small", weight:"2 pounds", color: "orange", fixed: "Yes", housetrained: "Unknown", url: "https://kcpetproject.org/animal-details/?aid=50880898&cid=11&tid=Cat#.Yw-t5nbMK5c", shelter_id: 1)
a3 =Animal.create!(name: "Addison", image: "https://g.petango.com/photos/1287/aae9e87a-7770-4278-9d6f-01a44ecf632e.jpg", location: "KC", species: "Cat", breed: "Donestic Shorthair", age: "2 months", gender: "Female", size: "small", weight:"2 pounds", color: "grey", fixed: "No", housetrained: "Yes", url: "https://kcpetproject.org/animal-details/?aid=50800182&cid=11&tid=Cat#.Yw-uEHbMK5c", shelter_id: 1)
a4 =Animal.create!(name: "Agnes", image: "https://g.petango.com/photos/1287/0fcdf855-0fb6-461d-8066-1c18463c98cd.jpg", location: "KC", species: "Dog", breed: "Pitbull", age: "7 years", gender: "Female", size: "X-Large", weight:"82 pounds", color: "White/Grey", fixed: "Yes", housetrained: "Yes", url: "https://kcpetproject.org/animal-details/?aid=49670637&cid=11&tid=Dog#.Yw-uMnbMK5c", shelter_id: 1)
a5 =Animal.create!(name: "Aladdin", image: "https://g.petango.com/photos/1287/5b5469b0-b64c-47a3-beaf-3d8efd2886d9.jpg", location: "KC", species: "Dog", breed: "Mixed", age: "1 year 4 months", gender: "Male", size: "Large", weight:"60 pounds", color: "Brown/Black", fixed: "Yes", housetrained: "Unknown", url: "https://kcpetproject.org/animal-details/?aid=50827168&cid=11&tid=Dog#.Yw-uXHbMK5c", shelter_id: 1)
a6 =Animal.create!(name: "Alazay", image: "https://g.petango.com/photos/1287/6eeeb78f-c80a-4209-99a0-8a9dfce8cb63.jpg", location: "KC", species: "Dog", breed: "Pitbull", age: "11 years", gender: "Female", size: "Medium", weight:"40 pounds", color: "Black/White", fixed: "Yes", housetrained: "Unknown", url: "https://kcpetproject.org/animal-details/?aid=50597675&cid=11&tid=Dog#.Yw-ui3bMK5c", shelter_id: 1)
a7 =Animal.create!(name: "Albus", image: "https://g.petango.com/photos/1287/1fac73a9-f336-41bc-9f1a-a61bf4b3481f.jpg", location: "KC", species: "Dog", breed: "Rottweiler", age: "6 years", gender: "Male", size: "X-Large", weight:"78 pounds", color: "Black/Brown", fixed: "Yes", housetrained: "Yes", url: "https://kcpetproject.org/animal-details/?aid=49501363&cid=11&tid=Dog#.Yw-utHbMK5c", shelter_id: 1)
a8 =Animal.create!(name: "Aleigha", image: "https://g.petango.com/photos/1287/81c12869-b4ed-459e-ab95-c0ef7d3c68d8.jpg", location: "KC", species: "Cat", breed: "Donestic Shorthair", age: "6 years", gender: "Female", size: "Medium", weight:"7 pounds", color: "Brown/Orange", fixed: "Yes", housetrained: "Unknown", url: "https://kcpetproject.org/animal-details/?aid=50871610&cid=11&tid=Cat#.Yw-u3XbMK5c", shelter_id: 1)

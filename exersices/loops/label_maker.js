let label = {
names: "jeff",
address: "1302 Paper Road ",
city: "Pittsburgh",
state: "Pennsalvanyia",
zip: "32212"
}

function printContact() {
    console.log(label.names);
    console.log(label.address);
    console.log(label.city + "," + label.state + " "+ label.zip);
    
}
printContact(label)
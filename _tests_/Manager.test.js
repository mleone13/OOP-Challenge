const Manager = require ('../lib/Manager');

test ('can set office number' , () => {
    const man = new Manager ('mary', '13' , 'marykleone@gmail.com', '652')
    expect(man.officeNumber).toBe ('652')
})

test ('can get office number' , () => {
    const man = new Manager ('mary', '13' , 'marykleone@gmail.com', '652')
    expect(man.getOfficeNumber()).toBe ('652')
})
const Employee = require('../lib/Employee');

test ('can make object', () => {
    const emp = new Employee ('mary', '13' , 'marykleone@gmail.com')
    expect (typeof(emp)).toBe('object')
})

test ('can set name' , () => {
    const emp = new Employee ('mary', '13' , 'marykleone@gmail.com')
    expect (emp.name).toBe("mary")
})

test ('can set id' , () => {
    const emp = new Employee ('mary', '13' , 'marykleone@gmail.com')
    expect (emp.id).toBe("13")
})

test ('can set email' , () => {
    const emp = new Employee ('mary', '13' , 'marykleone@gmail.com')
    expect (emp.email).toBe("marykleone@gmail.com")
})

test ('can get name' , () => {
    const emp = new Employee ('mary', '13' , 'marykleone@gmail.com')
    expect (emp.getName()).toBe("mary")
})

test ('can get id' , () => {
    const emp = new Employee ('mary', '13' , 'marykleone@gmail.com')
    expect (emp.getId()).toBe("13")
})

test ('can get email' , () => {
    const emp = new Employee ('mary', '13' , 'marykleone@gmail.com')
    expect (emp.getEmail()).toBe("marykleone@gmail.com")
})
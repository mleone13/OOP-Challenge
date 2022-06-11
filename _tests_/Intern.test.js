const Intern = require ('../lib/Intern');

test ('can set school' , () => {
    const int = new Intern ('mary', '13' , 'marykleone@gmail.com', 'Detroit')
    expect(int.school).toBe ('Detroit')
})

test ('can get school' , () => {
    const int = new Intern ('mary', '13' , 'marykleone@gmail.com', 'Detroit')
    expect(int.getSchool()).toBe ('Detroit')
})
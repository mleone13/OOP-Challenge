const Engineer = require ('../lib/Engineer');

test ('can set gitHub' , () => {
    const eng = new Engineer ('mary', '13' , 'marykleone@gmail.com', 'mkleo13')
    expect(eng.gitHub).toBe ('mkleo13')
})

test ('can get gitHub' , () => {
    const eng = new Engineer ('mary', '13' , 'marykleone@gmail.com', 'mkleo13')
    expect(eng.getGitHub()).toBe ('mkleo13')
})
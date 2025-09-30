export const loginPage = (req, res) => {
  try {
    res.render('admin/login', {layout: false})
  } catch (error) {
    res.send(error.message)
  }
}

export const adminLogin = (req, res) => {
    res.render('admin/login', {layout: 'admin/layouts'})
  }

  export const logout = (req, res) => {
    res.send("logout")
  }
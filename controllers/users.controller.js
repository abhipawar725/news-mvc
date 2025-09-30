export const allUsers = (req, res) => {
    res.render('admin/user/index', {layout: 'admin/layouts'})
}

export const addPage = (req, res) => {
    res.render('admin/user/create', {layout: 'admin/layouts'})
}

export const add = (req, res) => {
    res.send("add user")
}

export const updatePage = (req, res) => {
    res.render('admin/user/update', {layout: 'admin/layouts'})
}

export const update = (req, res) => {
    res.send("update user")
}

export const remove = (req, res) => {
    res.send("delete user")
}
export const index = (req, res) => {
    res.render('frontend/index')
}

export const postByCategory = (req, res) => {
    res.render('frontend/category')
}

export const singlePost = (req, res) => {
    res.render('frontend/single')
}

export const postByAuthor = (req, res) => {
    res.render('frontend/author')
}

export const search = (req, res) => {
    res.render('frontend/search')
}

export const addComment = (req, res) => {
    res.render('frontend/single')
}
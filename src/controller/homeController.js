import CRUDService from "../services/CRUDService";

let getHomePage = (req, res) => {
    return res.render('homePage.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async(req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('Port CRUD from server');
}

let displayGetCRUD = async(req, res) => {
    let data = await CRUDService.getAllUser();
    console.log(data);
    return res.render('displayCRUD', {
        dataTable: data
    });
}

let getEditCRUD = async(req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoId(userId);
        //Check if user data not found
        return res.send('User found: ' + JSON.stringify(userData));
    } else {
        return res.send('User not found');
    }
}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
}
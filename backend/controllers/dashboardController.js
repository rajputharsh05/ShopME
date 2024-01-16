
const DashBoardForNormalUser = (req,res) => {
    res.json("User DashBoard");
}

const DashBoardForAdmin = (req,res) => {
    res.json("Admin Dashboard");
}

module.exports = {
    DashBoardForAdmin,
    DashBoardForNormalUser
}



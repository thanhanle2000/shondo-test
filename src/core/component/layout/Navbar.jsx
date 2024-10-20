
const Navbar = () => {
    // LST 
    const lst = [
        { id: 1, label: 'SALE UP TO 70%', link: "/" },
        { id: 2, label: 'Nữ', link: "/" },
        { id: 3, label: 'Nam', link: "/" },
        { id: 4, label: 'Trẻ em', link: "/" },
        { id: 5, label: '20 cửa hàng', link: "/" },
        { id: 6, label: 'Phụ kiện', link: "/" },
    ]

    return (
        <nav className="navbar">
            <img src="https://shkcdn.shondo.vn/media/logo/stores/1/new-sd-logo.png" />
            <div className="lst-navbar">
                {
                    lst?.map((item, index) =>
                        <div key={index}>
                            {item?.label}
                        </div>
                    )
                }
            </div>
            <div className="search-container">
                <input type="search" placeholder="Tìm kiếm sản phẩm......." />
                <span className="search-icon"><img src="https://cdn-icons-png.flaticon.com/128/5636/5636698.png" /></span>
            </div>
        </nav>
    );
};

export default Navbar;

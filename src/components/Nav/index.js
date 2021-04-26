import React, { useEffect } from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <section>
            <nav>
                <ul>
                    {categories.map((category) => (
                        <li
                            className={` ${currentCategory.name === category.name && 'selectedCategory'}`}
                            key={category.id} onClick={() => {
                                setCurrentCategory(category);
                            }}>{category.name}</li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}

export default Nav;
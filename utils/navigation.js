const scrollToNode = (id, router) => {
    const node = document.getElementById(id);
    if (node === null) router.push(`/#${id}`);

    if (node) node.scrollIntoView({ behavior: 'smooth' });
};

export { scrollToNode };

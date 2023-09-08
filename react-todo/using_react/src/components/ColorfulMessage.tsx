const ColorfulMessage = (props: any) => {
    // console.log(props);

    const { color, children } = props;
    const contentStyle = {
        color,
        fontSize: '18px'
    };

    return (
        <p style={contentStyle}>{children}</p>
    );
};

export default ColorfulMessage;

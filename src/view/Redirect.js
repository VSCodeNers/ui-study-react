const Redirect = () => {
    const code = new URL(document.location).searchParams.get("code");
    console.log(code);

    return (
        <div> 로그인 중... </div>
    )
}
export default Redirect;
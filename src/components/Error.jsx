const Error = ({error}) => {
    return (
        <div className="flex flex-col gap-3 bg-red-700 h-fit p-4 rounded-md">
            <p>Bir hata oluştu lütfen sonra tekrar deneyiniz</p>
            <h2 className="font-semibold">{error}</h2>
        </div>

    )
}

export default Error
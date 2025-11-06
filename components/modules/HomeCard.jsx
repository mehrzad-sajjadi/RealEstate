import Link from "next/link";

export default function HomeCard(data) {
    return (
        <div className="card">
            
            <img src={data.img} alt="House 6" className="card__img" />
            <h5 className="card__title">
                {data.title}
            </h5>
            <svg className="card__like">
                {/* <use xlink:href="img/sprite.svg#icon-heart-full"></use> */}
            </svg>
            <div className="card__details">
                <svg className="card__icon">
                    {/* <use xlink:href="img/sprite.svg#icon-map-pin"></use> */}
                </svg>
                <p className="card__text">مالدیو</p>

                <svg className="card__icon">
                    {
                        // <use xlink:href="img/sprite.svg#icon-profile-male"/> 
                    }
                </svg>
                <p className="card__text">{data.roomCount} اتاق</p>

                <svg className="card__icon">
                    {/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}
                </svg>
                <p className="card__text">{data.meterage} متر مربع</p>

                <svg className="card__icon">
                    {/* <use xlink:href="img/sprite.svg#icon-key"></use> */}
                </svg>
                <p className="card__text">{data.price.toLocaleString()} میلیون تومان</p>
            </div>

            <Link href={`/Homes/${data.id}`} className="btn btn-brown btn-card">مشاهده ملک</Link>
        </div>
    );
}
import { dashboadCardData } from "../../../../types/dashboard";

const DashboardCardData = ({ cardData }: { cardData: Array<dashboadCardData> }): JSX.Element => {
    return (
        <>
            <div className="row row-cols-1 row-cols-xxl-6 row-cols-lg-3 row-cols-md-2">
                {cardData.map((card: dashboadCardData, index: number) => (
                    <div className="col" key={index}>
                        <div className="card widget-icon-box">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div className="flex-grow-1 overflow-hidden">
                                        <h5 className="text-muted text-uppercase fs-13 mt-0" title={card.title}>
                                            {card.title}
                                        </h5>
                                        <h3 className="my-3">{card.value}</h3>
                                        <p className="mb-0 text-muted text-truncate">
                                            <span className={`badge ${card.badge.color} me-1`}>
                                                <i className={card.badge.icon}></i>
                                                {card.badge.text}
                                            </span>
                                            <span>Since last month</span>
                                        </p>
                                    </div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className={`avatar-title ${card.iconBg} rounded rounded-3 fs-3 widget-icon-box-avatar shadow`}>
                                            <i className={card.icon}></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DashboardCardData;
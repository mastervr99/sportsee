function SessionTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="session_tooltip">
                <p className="label">{`${payload[0].value} min`}</p>
            </div>
        );
    }

    return null;
}

export default SessionTooltip;
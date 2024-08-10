import { useState, useEffect } from "react";

function Stats() {
    const [expanded, setExpanded] = useState(false);
    const [totalContacts, setTotalContacts] = useState(0);
    const [totalPhones, setTotalPhones] = useState(0);
    const [lastUpdatedContact, setLastUpdatedContact] = useState('');
    const [oldestContact, setOldestContact] = useState('');

    async function getStats() {
        const response = await fetch('http://localhost/api/stats');
        const data = await response.json();
        setTotalContacts(data.totalContacts);
        setTotalPhones(data.totalPhones);
        setLastUpdatedContact(data.lastUpdatedContact);
        setOldestContact(data.oldestContact);
    }

    useEffect(() => {
        getStats();
    }, []);

    return (
        <div className="stats">
            <p onClick={(e) => setExpanded(!expanded)}>{expanded ? 'Hide Stats' : 'Show Stats'}</p>

            <div className="stats-container" style={
                {
                    display: expanded ? 'block' : 'none',
                }
            }>
                <p><b>Number of Contacts:</b></p>
                <p>{totalContacts}</p>
                
                <p><b>Number of Phones:</b></p>
                <p>{totalPhones}</p>
                
                <p><b>Newest Contact Timestamp:</b></p>
                <p>{lastUpdatedContact}</p>

                <p><b>Oldest Contact Timestamp:</b></p>
                <p>{oldestContact}</p>

                <br />
                <button className="button green" onClick={(e) => getStats()}>Refresh</button>
            </div>
        </div>
    )
}

export default Stats;
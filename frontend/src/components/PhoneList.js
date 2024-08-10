import Phone from './Phone.js';
import NewPhone from './NewPhone.js';

function PhoneList(props) {
    const {contact, phones, setPhones} = props;

	return (
        <div className='phone-list'>
            <NewPhone phones={phones} setPhones={setPhones} contact={contact} />

            <table onClick={(e) => e.stopPropagation()}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        phones.map((phone) => {
                            return (
                                <Phone key={phone.id} phone={phone} phones={phones} setPhones={setPhones} contact={contact} />
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
	);
}

export default PhoneList;

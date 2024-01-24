import React, {useState, useContext} from 'react';
import {GlobalDataContext} from '../context/GlobalDataProvider';
import {useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AddDistributor = () => {
  const {addDistributor} = useContext(GlobalDataContext);
  const [newDistributor, setNewDistributor] = useState({name: '', city: ''});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setNewDistributor({...newDistributor, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDistributor({...newDistributor, id: Date.now()}); // Assuming ID is generated here
    navigate('/distributors');
  };

  return (
    <>
        <Header />
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Add New Distributor</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <table>
                <tbody>
                    <tr>
                        <td>
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="name"
                            >
                            Distributor Name
                            </label>
                        </td>
                        <td>
                        <input
                            className="appearance-none block w-full  text-gray-700 border rounded py-1 px-4 leading-tight focus:outline focus:bg-white"
                            id="name"
                            type="text"
                            name="name"
                            value={newDistributor.name}
                            onChange={handleInputChange}
                            placeholder="Enter Distributor Name"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="city"
                            >
                            City
                            </label>
                        </td>
                        <td>
                        <input
                            className="appearance-none block w-full  text-gray-700 border rounded py-1 px-4 leading-tight focus:outline focus:bg-white"
                            id="city"
                            type="text"
                            name="city"
                            value={newDistributor.city}
                            onChange={handleInputChange}
                            placeholder="Enter City"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="city"
                            >
                            State/Region
                            </label>
                        </td>
                        <td>
                        <input
                            className="appearance-none block w-full  text-gray-700 border rounded py-1 px-4 leading-tight focus:outline focus:bg-white"
                            id="city"
                            type="text"
                            name="state"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="city"
                            >
                            Country
                            </label>
                        </td>
                        <td>
                        <select
                            className="appearance-none block w-full text-gray-700 border rounded py-1 px-4 leading-tight focus:outline focus:bg-white"
                            name="country"
                        >
                            <option value="" disabled>Select Country</option>
                            <option value="Country1">Australia</option>
                            <option value="Country2">Indonesia</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="city"
                            >
                            Phone
                            </label>
                        </td>
                        <td>
                        <input
                            className="appearance-none block w-full text-gray-700 border rounded py-1 px-4 leading-tight focus:outline focus:bg-white"
                            id="city"
                            type="text"
                            name="phone"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="city"
                            >
                            Email
                            </label>
                        </td>
                        <td>
                        <input
                            className="appearance-none block w-full text-gray-700 border rounded py-1 px-4 leading-tight focus:outline focus:bg-white"
                            id="city"
                            type="email"
                            name="email"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
                <button
                className="bg-gray-400 text-black font-bold py-1 px-5 rounded"
                type="submit"
                >
                Add
                </button>
            </div>
            </div>
        </form>
        </div>
        <Footer />
    </>
  );
};

export default AddDistributor;
import React, {useState, useEffect, useContext} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {GlobalDataContext} from '../context/GlobalDataProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EditDistributor = () => {
  const {id} = useParams();
  const {distributors, updateDistributor} = useContext(GlobalDataContext);
  const [distributor, setDistributor] = useState({name: '', city: ''});
  const navigate = useNavigate();

  useEffect(() => {
    const distributorToEdit = distributors.find((d) => d.id.toString() === id);
    if (distributorToEdit) {
      setDistributor(distributorToEdit);
    }
  }, [id, distributors]);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setDistributor({...distributor, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDistributor(parseInt(id), distributor);
    navigate('/distributors');
  };

  return (
    <>
    <Header />
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Distributor</h1>
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
                value={distributor.name}
                onChange={handleInputChange}
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
                value={distributor.city}
                onChange={handleInputChange}
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default EditDistributor;

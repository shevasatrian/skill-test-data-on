import React, {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setTitle('');
      setAuthor('');
      setFile(null);
    };

    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (fileLoadedEvent) => {
        const blob = new Blob([fileLoadedEvent.target.result], {
          type: file.type,
        });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = file.name;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      fileReader.readAsArrayBuffer(file);
    } else {
      alert('No file selected to save.');
    }
  };

  return (
    <>
    <Header />
        <div className="container mx-auto p-4 my-8">
        <form onSubmit={handleSubmit} className="">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label>Title</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="Enter document title"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Document File</label>
                        </td>
                        <td>
                            <input
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                className="mt-1 block w-full"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Author</label>
                        </td>
                        <td>
                            <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Enter author name"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button
            type="submit"
            className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-black bg-gray-300 "
            >
            Add Document
            </button>
        </form>
        <p className="text-gray-600 mt-4">
            There are currently no reports in the library.
        </p>
        </div>
        <Footer />
    </>
  );
};

export default Upload;
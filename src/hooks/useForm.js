import useLocalStorage from "./useLocalStorage";

const useForm = (initialValue) => 
{
    const [values, setValues] = useLocalStorage("fields", initialValue);

    const handleChanges = (e) =>
    {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const clearForm = (e) =>
    {
        e.preventDefault();
        setValues(initialValue);
    };

    return ([values, handleChanges, clearForm]);
};

export default useForm;
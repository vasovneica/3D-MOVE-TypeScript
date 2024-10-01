import { useEffect, useState } from 'react';
import Select from 'react-select';


const options = [
  { value: 'all', label: 'all' },
  { value: 'car', label: 'car' },
  { value: 'air', label: 'air' },
  { value: 'other', label: 'other' },
];

// const customStyles= {
//   control: (provided:any) => ({
//     ...provided,
    
//     padding: '0.25rem',
//     height: '50px',
//     width:'128px',
//     border: 'none',
//     color: 'hsl(200, 15%, 8%)',
//     boxShadow: '#454749',
//   }),

//   option: (provided:any,) => ({
//     ...provided,
//     cursor: 'pointer',
//     color: 'hsl(200, 5%, 8%)',
//     backgroundColor: '#f4f4f4',
//   }),
// };

interface ICustomSelect{
  setSearchParams:(searchParams:string) => void
  postQuery:string
  currantPage:number
}

interface ITypeSelect{
  value:string
   label:string
}

export const CustomSelect = ({ setSearchParams, postQuery, currantPage }:ICustomSelect):JSX.Element  => {

  // const [search, setSearch] = useState<string>("");
  const [queryType] = useState<string>(postQuery);
  const [type, setType] = useState<ITypeSelect>({value:'',label:''});
  const [initType] = useState<string>(postQuery);
  const [page] = useState<number>(currantPage);
  // const selected :any= options.find(option => option.value === queryType);

  useEffect(() => {
    const selected:any = options.find(option => option.value === postQuery);
    setType(selected);
    setSearchParams(`?sort=${(type.value !== '') ? type.value : 'all'}&page=${page}`);
    
  }, [type,queryType])

 

  


  return (
    <div className='select-wrapper'>

      <Select
        options={options}
        placeholder='Filter by type...'
        isClearable={false}
        isSearchable={false}
        defaultValue={initType as any}
        value={type}
        onChange={setType}
      />
      
    </div>
  )
}

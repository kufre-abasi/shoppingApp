interface LoginProps {
    onNext: () => void;
    onChange: (data: any) => void;
    handleCloseModal: any;
  }
  

interface  All{
  title:string;
  response:string;
}

  interface FormData {
    country_id?: any;
    first_name: string;
    last_name: string;
    email: string;
    // country_id?: un;
    password: string;
  }
  interface Feeds {
    name?:string
    username?:string
    day?:string
    post?:string
    image?:string
    deleteIcon?:any
    
  }
  
  interface TransactionCardProps{
    title:any
    date:any
   time:any
   amount:any
  cash_icon:any
  stlye:any
  checkBorder?:any
  }
  
interface OtherProps {
    onNext: () => void;
    onPrev: () => void;
    onChange: (data: any) => void;
    handleCloseModal: any;
  }
  
  interface User {
    token: string;

    // Add any other user-related properties here
  }
  
  interface AuthContextProps {
    user: User | null;
    isAuthenticated: boolean;
    loginContext: (user: User) => void;
    logout: () => void;
  }

  
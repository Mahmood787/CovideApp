import React from 'react'
import {Cards, Charts, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import {TopBar} from './components/TopBar'
import {Img} from './components/Img'
import {Footer} from './components/Footer'


class App extends React.Component{
    state = {data:{},
            country:'',

}

   async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data : fetchedData})
        
    }
    handleCountryChange = async (country)=>{
        const fetchedData = await fetchData(country)
        
        //set staet
        this.setState({data:fetchedData, country:country})
        
    }
    render(){
        const {data, country}=this.state
        return(
            <div className={styles.container}>
                <TopBar/>
                <Img />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country} />
                <Footer />
                
                
            </div>
        )
    }
}
export default App;
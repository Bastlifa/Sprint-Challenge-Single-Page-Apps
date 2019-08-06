import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';
import EpisodeList from './EpisodeList';
import { useLocalStorage } from './useLocalStorage'

export default function AppRouter() {
  const [searchParams, setSearchParams] = useLocalStorage("search", "")

  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route path='/characters' render={props =>  
        <CharacterList 
          {...props} 
          searchParams={searchParams}
          setSearchParams={setSearchParams} 
        />
        } />
      <Route path='/locations' render={props =>  
        <LocationsList 
          {...props} 
          searchParams={searchParams}
          setSearchParams={setSearchParams} 
        />
        } />
      <Route path="/episodes" render={props =>  
        <EpisodeList 
          {...props} 
          searchParams={searchParams}
          setSearchParams={setSearchParams} 
        />
        } />
      <Route component={WelcomePage} />
    </Switch>
  </div>

}

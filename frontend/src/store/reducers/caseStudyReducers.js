export const caseStudyListReducer=(state={caseStudies:[]}, action)=>{
    switch(action.type){
        case 'CASESTUDY_LIST_REQUEST':
            return{ loading:true , caseStudies:[]}
        case 'CASESTUDY_LIST_SUCCESS':
            return{ loading: false, caseStudies: action.payload} 
        case 'CASESTUDY_LIST_FAIL':
            return{ loading: false, error: action.payload}       
        default: 
        return state   
    }
}

export const caseStudyDetailsReducer=(state={caseStudy:{reviews:[]}}, action)=>{
    switch(action.type){
        case 'CASESTUDY_DETAILS_REQUEST':
            return{ loading:true , ...state}

        case 'CASESTUDY_DETAILS_SUCCESS':
            return{ loading: false, caseStudy: action.payload} 

        case 'CASESTUDY_DETAILS_FAIL':
            return{ loading: false, error: action.payload}  
            
        case 'CASESTUDY_DETAILS_RESET':
        return{caseStudy:{reviews:[]}}      

        default: 
        return state   
    }
}

export const caseStudyDeleteReducer=(state={}, action)=>{
    switch(action.type){
        case 'CASESTUDY_DELETE_REQUEST':
            return{ loading:true}

        case 'CASESTUDY_DELETE_SUCCESS':
            return{ loading: false, success:true} 

        case 'CASESTUDY_DELETE_FAIL':
            return{ loading: false, error: action.payload}  
            
        default: 
        return state   
    }
}

export const caseStudyCreateReducer=(state={}, action)=>{
    switch(action.type){
        case 'CASESTUDY_CREATE_REQUEST':
            return{ loading:true}

        case 'CASESTUDY_CREATE_SUCCESS':
            return{ loading: false, success: true, caseStudy: action.payload} 

        case 'CASESTUDY_CREATE_FAIL':
            return{ loading: false, error: action.payload}  

        case 'CASESTUDY_CREATE_RESET':
            return{}      
            
        default: 
        return state   
    }
}

export const caseStudyUpdateReducer=(state={caseStudy:{}}, action)=>{
    switch(action.type){
        case 'CASESTUDY_UPDATE_REQUEST':
            return{ loading:true}

        case 'CASESTUDY_UPDATE_SUCCESS':
            return{ loading: false, success: true, caseStudy: action.payload} 

        case 'CASESTUDY_UPDATE_FAIL':
            return{ loading: false, error: action.payload}  

        case 'CASESTUDY_UPDATE_RESET':
            return{caseStudy:{}}      
            
        default: 
        return state   
    }
}
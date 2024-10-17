export interface Synonym {
    id: number; 
    name: string;
  }
  
  export interface Term {
    id: number; 
    iri: string;
    label: string;
    description?: string | null; 
    gwas_trait: boolean;
    ontology_name: string;
    ontology_prefix: string;
    ontology_iri: string;
    is_obsolete: boolean;
    term_replaced_by?: Term | null;
    is_defining_ontology: boolean;
    has_children: boolean;
    is_root: boolean;
    short_form: string;
    obo_id: string;
    created_at: string; 
    updated_at: string; 
    parent?: Term | null; 
    synonyms: Synonym[]; 
  }
  
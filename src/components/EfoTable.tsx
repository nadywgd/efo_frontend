import React, { useEffect, useMemo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Input, Pagination } from 'antd';
import { fetchEfoTerms } from '../redux/efoSlice.ts';
import { RootState, AppDispatch } from '../redux/store.ts';

const { Search } = Input;

const EfoTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { terms, loading } = useSelector((state: RootState) => state.efo);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize]= useState<number>(10);
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [sortField, setSortField] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchEfoTerms());
  }, [dispatch]);

  const filteredTerms = useMemo(() => {
    return terms.filter(term => 
      term.label.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (term.description && term.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (term.short_form && term.short_form.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (term.synonyms && term.synonyms.some(synonym => synonym.name.toLowerCase().includes(searchTerm.toLowerCase())))
    );
  }, [terms, searchTerm]);

  const sortedTerms = useMemo(() => {
    if (!sortField || !sortOrder) return filteredTerms;

    return [...filteredTerms].sort((a, b) => {
      const aValue = a[sortField] || '';
      const bValue = b[sortField] || '';

      if (sortOrder === 'ascend') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
  }, [filteredTerms, sortField, sortOrder]);

  const paginatedTerms = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedTerms.slice(startIndex, startIndex + pageSize);
  }, [currentPage, sortedTerms, pageSize]);

  const columns = useMemo(
    () => [
      { title: 'Label', dataIndex: 'label', key: 'label', sorter: true , width: 200},
      { title: 'Description', dataIndex: 'description', key: 'description', width: 900},
      { title: 'Short Form', dataIndex: 'short_form', key: 'short_form', sorter: true, width: 150 },
      { 
        title: 'IRI', 
        dataIndex: 'iri', 
        key: 'iri', 
        render: (iri: string) => (
          <a href={iri} target="_blank" rel="noopener noreferrer">
            {iri}
          </a>
        ), 
      },
    ],
    []
  );
  
  const onSearch = useCallback((value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  }, []);

  const handleTableChange = useCallback(
    (pagination, filters, sorter) => {
      if (sorter && sorter.field) {
        setSortField(sorter.field);
        setSortOrder(sorter.order as 'ascend' | 'descend');
      } else {
        setSortField(null);
        setSortOrder(null);
      }
    },
    []
  );

  return (
    <>
      <Search
        placeholder="Search EFO terms"
        onSearch={onSearch}
        enterButton
        style={{ width: '100%', marginBottom: '20px' }}
      />
      <div style={{ height: '80vh', width: "100%", overflowY: 'auto', display: 'inline-block' }}>
      <Table
        columns={columns}
        dataSource={paginatedTerms}
        loading={loading}
        pagination={false}
        rowKey="id"  
        onChange={handleTableChange}
      />
      </div>
      <Pagination
      className='pagination'
      current={currentPage}
      total={filteredTerms.length}
      pageSize={pageSize}
      showSizeChanger
      onChange={(page, pageSize) => {
        setCurrentPage(page);
        setPageSize(pageSize);
      }}  
      ></Pagination>
    </>
  );
};

export default EfoTable;

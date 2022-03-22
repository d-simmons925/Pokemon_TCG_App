import React from 'react'
import { Button } from 'reactstrap'
import './pagenav.css'

type PropsFunc = (index: number) => void

const PageNav = ({
  setPage,
  pageIndex,
  pagesNum,
}: {
  setPage: PropsFunc
  pageIndex: number
  pagesNum: number
}) => {
  const pages = []
  for (let i = 0; i < pagesNum; i++) {
    pages.push(i + 1)
  }
  return (
    <div className="page-nav">
      {pageIndex === 0 ? (
        <Button
          color="primary"
          onClick={() => {
            setPage(pageIndex - 1)
          }}
          disabled
        >
          <i className="fas fa-angle-left" aria-label="previous page"></i>
        </Button>
      ) : (
        <Button
          color="primary"
          onClick={() => {
            setPage(pageIndex - 1)
          }}
        >
          <i className="fas fa-angle-left" aria-label="previous page"></i>
        </Button>
      )}
      <div className="index-container">
        {pages.map((page: number, index: number) => (
          <Button
            color={`${pageIndex === index ? 'warning' : 'secondary'}`}
            onClick={() => setPage(index)}
          >
            {page}
          </Button>
        ))}
      </div>
      {pageIndex === pagesNum - 1 ? (
        <Button
          color="primary"
          onClick={() => {
            setPage(pageIndex + 1)
          }}
          disabled
        >
          <i className="fas fa-angle-right" aria-label="next page"></i>
        </Button>
      ) : (
        <Button
          color="primary"
          onClick={() => {
            setPage(pageIndex + 1)
          }}
        >
          <i className="fas fa-angle-right" aria-label="next page"></i>
        </Button>
      )}
    </div>
  )
}

export default PageNav

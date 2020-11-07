import React from 'react'

export default function SupplierHeader() {
    return (
        <header className="bar-header d-flex">
            <div className="container text-center my-auto">
                <div className="s01">
                    <form method="POST" action="/search">
                        <h1 className="mb-2 dark-background">Find your next job!</h1>
                        <div className="inner-form">
                            <div className="input-field first-wrap">
                                <input name="what" id="location" type="text" placeholder="What are you looking for?" />
                            </div>
                            <div className="input-field second-wrap">
                                <input name="where" id="search" type="text" placeholder="Where?" />
                            </div>

                            <div className="input-field third-wrap">
                                <button className="btn-search" type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    )
}

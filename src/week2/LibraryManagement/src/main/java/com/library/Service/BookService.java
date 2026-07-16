//package com.library.Service;
//
//public class bookservice {
//}




package com.library.Service;

import com.library.Repository.Bookrepository;

public class BookService {

    private Bookrepository repository;

    public void setRepository(Bookrepository repository) {
        this.repository = repository;
    }

    public void displayService() {

        System.out.println("Book Service Working...");

        repository.displayRepository();
    }

}

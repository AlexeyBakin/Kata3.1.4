package com.example.web.config;

import com.example.web.model.Role;
import com.example.web.model.User;
import com.example.web.service.RoleService;
import com.example.web.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import javax.annotation.PostConstruct;
import java.util.HashSet;
import java.util.Set;

@Component
@AllArgsConstructor
public class DataBaseInit {
    private final UserService userService;
    private final RoleService roleService;

    @PostConstruct
    private void startDB() {
        User user = new User("user", "Alex", "Bakin", "email@gmail.com", "user");
        User admin = new User("admin", "Alexey", "Bakinson", "gmail@mail.ru", "admin");
        User superAdmin = new User("superadmin", "Alexeus", "Bakinsonovec", "supermail@gmail.com", "superadmin");
        Role userRole = new Role("ROLE_USER");
        Role adminRole = new Role("ROLE_ADMIN");
        Set<Role> superAdminRole = new HashSet<>();
        superAdminRole.add(adminRole);
        superAdminRole.add(userRole);
        roleService.addRole(userRole);
        roleService.addRole(adminRole);
        user.setOneRole(userRole);
        admin.setOneRole(adminRole);
        superAdmin.setRoles(superAdminRole);
        userService.addUser(user);
        userService.addUser(admin);
        userService.addUser(superAdmin);
    }
}
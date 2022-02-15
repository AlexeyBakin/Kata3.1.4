package com.example.web.controller;

import com.example.web.model.Role;
import com.example.web.model.User;
import com.example.web.service.RoleService;
import com.example.web.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@AllArgsConstructor
@RequestMapping("/admin")
public class AdminRestController {
    private final UserService userService;
    private final RoleService roleService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsersList() {
        return ResponseEntity.ok().body(userService.getAllUser());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long id) {
        return ResponseEntity.ok().body(userService.getUserById(id));
    }

    @PatchMapping("/update")
    public ResponseEntity<User> update(@RequestBody @Valid User user,
                                       @RequestParam(required = false, name = "currentRoles") String[] currentRoles) {
        for (String role : currentRoles) {
            user.setOneRole(new Role(role));
        }
        userService.updateUser(user);
        return ResponseEntity.ok().body(user);
    }
}

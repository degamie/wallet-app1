package com.wallet.wallet_app.service;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;

public class Register extends JFrame implements ActionListener {
    JRadioButton r1,r2,m1,m2,m3;
    JButton next;

    JTextField textname,textFname,TextEmail,textAdd,textCity,textState,textPin;
    JDateChooser dateChooser;
    Random run=new Random();
    long first4=(ran.nextLong()%9000L)+1000L;
    String first=" "+Math.abs(first4);
    Register() {
        super("APPLICATION FORM");
        ImageIcon i1 = new ImageIcon(getClass().getResource("/images/icon.png"));
        Image i2 = i1.getImage().getScaledInstance(150, 150, Image.SCALE_SMOOTH);
        ImageIcon i3 = new ImageIcon(i2);

        JLabel l1 = new JLabel(i3);
//        Image.setBounds(25, 10, 100, 100);
        add(l1);

        JLabel l2 = new JLabel("Page 1");
        l2.setFont(new Font("Times New Roman", Font.BOLD, 20));
        l2.setForeground(Color.WHITE);
        l2.setFont(new Font("Times New Roman", Font.BOLD, 20));
        add(l1);

        JLabel l3 = new JLabel("Page 2");
        l2.setFont(new Font("Times New Roman", Font.BOLD, 20));
        l2.setForeground(Color.WHITE);
        add(l2);

        JLabel labelName = new JLabel("NAME");
        labelName.setFont(new Font("Times New Roman", Font.BOLD, 20));
        labelName.setForeground(Color.WHITE);
        labelName.setFont(new Font("Times New Roman", Font.BOLD, 20));
        add(labelName);

        textname = new JTextField();
        textname.setFont(new Font("Times New Roman", Font.BOLD, 20));
        textname.setForeground(Color.WHITE);
        textname.setFont(new Font("Times New Roman", Font.BOLD, 20));
        add(textname);

        JLabel labelfname = new JLabel("Father's Name");
        labelfname.setFont(new Font("Times New Roman", Font.BOLD, 20));
        labelfname.setBounds(100, 240, 400, 30);
        add(labelfname);

        textFname = new JTextField();
        textFname.setFont(new Font("Times New Roman", Font.BOLD, 20));
        textFname.setForeground(Color.WHITE);
        textFname.setFont(new Font("Times New Roman", Font.BOLD, 20));
        add(textFname);

        JLabel DOB = new JLabel("DOB");
        DOB.setFont(new Font("Times New Roman", Font.BOLD, 20));
        DOB.setForeground(Color.WHITE);
        DOB.setFont(new Font("Times New Roman", Font.BOLD, 20));
        add(DOB);
//
//        dateChooser = new JDateChooser();
//        dateChooser.setForeground(new Color(105, 105, 105));
//        dateChooser.setBounds(100, 290, 200, 30);
//        add(dateChooser);

        JLabel labelGender = new JLabel("Gender");
        labelGender.setFont(new Font("Times New Roman", Font.BOLD, 20));
        labelGender.setForeground(Color.WHITE);
        add(labelGender);

        r1 = new JRadioButton("Male");
        r1.setFont(new Font("Times New Roman", Font.BOLD, 20));
        r1.setForeground(Color.WHITE);
        r1.setSelected(true);
        add(r1);

        r2 = new JRadioButton("Female");
        r2.setFont(new Font("Times New Roman", Font.BOLD, 20));
        r2.setForeground(Color.WHITE);
        r2.setSelected(true);
        add(r2);

        m1 = new JRadioButton("Married");
        m1.setFont(new Font("Times New Roman", Font.BOLD, 20));
        m1.setForeground(Color.WHITE);
        m1.setSelected(true);
        add(m1);

        m2 = new JRadioButton("Unmarried");
        m2.setFont(new Font("Times New Roman", Font.BOLD, 20));
        m2.setForeground(Color.WHITE);
        m2.setSelected(true);
        add(m2);

        ButtonGroup bg = new ButtonGroup();
        bg.add(r1);
        bg.add(r2);
        JLabel labelEmail = new JLabel("Email");
        labelEmail.setFont(new Font("Times New Roman", Font.BOLD, 20));
        labelEmail.setForeground(Color.WHITE);
        labelEmail.setFont(new Font("Times New Roman", Font.BOLD, 20));
        add(labelEmail);

        TextEmail = new JTextField();
        TextEmail.setFont(new Font("Raleway", Font.BOLD, 14));
        TextEmail.setForeground(Color.WHITE);
        TextEmail.setBounds(100, 250, 200, 30);
        add(TextEmail);

        JLabel LabelMs = new JLabel("Marital Status: ");
        LabelMs.setFont(new Font("Times New Roman", Font.BOLD, 20));
        LabelMs.setForeground(Color.WHITE);
        add(LabelMs);

        ButtonGroup b1 = new ButtonGroup();
        b1.add(r1);
        b1.add(r2);
        b1.add(m1);
        b1.add(m2);

        JLabel labelAdd = new JLabel("ADD");
        labelAdd.setFont(new Font("Times New Roman", Font.BOLD, 20));
        labelAdd.setForeground(Color.WHITE);
        add(labelAdd);

        textAdd = new JTextField();
        textAdd.setFont(new Font("Times New Roman", Font.BOLD, 20));
        textAdd.setForeground(Color.WHITE);
        textAdd.setBounds(100, 300, 200, 30);
        add(textAdd);

        JLabel labelCity = new JLabel("CITY");
        labelCity.setFont(new Font("Times New Roman", Font.BOLD, 20));
        labelCity.setForeground(Color.WHITE);
        labelCity.setFont(new Font("Times New Roman", Font.BOLD, 20));
        add(labelCity);

        JLabel labelPin = new JLabel("PIN");
        labelPin.setFont(new Font("Times New Roman", Font.BOLD, 20));
        labelPin.setForeground(Color.WHITE);
        labelPin.setFont(new Font("Times New Roman", Font.BOLD, 20));
        add(labelPin);

        textPin = new JTextField();
        textPin.setFont(new Font("Times New Roman", Font.BOLD, 20));
        textPin.setForeground(Color.WHITE);
        add(textPin);

        JLabel labelState = new JLabel("STATE");
        labelState.setFont(new Font("Times New Roman", Font.BOLD, 20));
        labelState.setForeground(Color.WHITE);
        labelState.setFont(new Font("Times New Roman", Font.BOLD, 20));
        add(labelState);

        textState = new JTextField();
        textState.setFont(new Font("Times New Roman", Font.BOLD, 20));
        textState.setForeground(Color.WHITE);
        add(textState);

        next = new JButton("Next");
        next.setFont(this);
        next.setForeground(Color.WHITE);
        next.setFont(new Font("Times New Roman", Font.BOLD, 20));
        next.setBackground(Color.WHITE);
        next.setForeground(Color.WHITE);
        add(next);

        getContentPane().setBackground(new Color(222, 255, 228));
        setLayout(null);
        setSize(800, 600);
        setLocationRelativeTo(null);
        setVisible(true);

    }
    @Override
    public void actionPerformed(ActionEvent e){
        String formnum=first;
        String name=textname.getText();
        String fname=textname.getText();
        String dob=((JTextField) dateChooser.getDateEditor().getUiComponent()).getText();
        String gender=null;
        if(r1.isSelected())gender="Male";
        else if(r2.isSelected())gender="Female";
        String email=TextEmail.getText();
        String marital=null;

        if(m1.isSelected())marital="married";
        else if(m2.isSelected())marital="Unmarried";
        else if(m3.isSelected())marital="Other";

        String address=textAdd.getText();
        String city=textCity.getText();
        String pin=textPin.getText();
        String state=textState.getText();

        try{
            if(textname.getText().equals(""))JOptionPane.showMessageDialog(null, "Please enter a name");
            else {
                Conn c=new Conn();
                String q="Insert into signup values('"+formnum+"'"+name+"'"+fname+"'"+dob+"'"+gender+"'"+","+email+"','"+marital+"','"+city+"','"+pin+"','"+state+"')";
                c.statement.executeUpdate(q);
                new Register(formnum);
                setVisible(false);

            }
        }
        catch (Exception e){
            e.printStackTrace();
        }
        public static void main(String[] args){
            new Register();
        }
    }
    }

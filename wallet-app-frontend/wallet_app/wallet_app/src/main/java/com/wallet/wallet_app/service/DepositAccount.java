package com.wallet.wallet_app.service;

import com.wallet.wallet_app.main_class;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Date;

public class DepositAccount extends JFrame implements ActionListener {
    String pin;
    TextField textField;

    JButton button1, button2;

    DepositAccount(String pin) {
        this.pin = pin;
        ImageIcon i1 = new ImageIcon(getClass().getResource("/images/deposit_icon.png"));
        Image i2 = i1.getImage().getScaledInstance(150, 150, Image.SCALE_SMOOTH);
        ImageIcon i3 = new ImageIcon(i2);
        JLabel l3 = new JLabel(i3);
        l3.setBounds(0, 0, 150, 150);
        add(l3);

        textField = new TextField(pin);
        textField.setEditable(false);
        textField.setBackground(new Color(65, 125, 220));
        textField.setFont(new Font("Times New Roman", Font.PLAIN, 20));
        textField.setForeground(Color.white);
        l3.add(textField);

        button1 = new JButton("Deposit");
        button1.setBackground(new Color(65, 125, 220));
        button1.setFont(new Font("Times New Roman", Font.PLAIN, 20));
        button1.setForeground(Color.white);
        button1.addActionListener(this);
        l3.add(button1);

        button2 = new JButton("Cancel");
        button2.setBackground(new Color(65, 125, 220));
        button2.setFont(new Font("Times New Roman", Font.PLAIN, 20));
        button2.setForeground(Color.white);
        button2.addActionListener(this);
        l3.add(button2);

        setLayout(null);
        setSize(150, 150);
        setLocationRelativeTo(null);
        setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {

    }
}
//    @Override
//    public void actionPerformed(ActionEvent e) {
//        try{
//            String amt=textField.getText();
//            Date date=new Date();
//            if(e.getSource()==button1){
//                if(amt.equals("Deposit")){
//                    JOptionPane.showMessageDialog(null,"Rs. "+amt+"Deposited Successfully");
//                    setVisible(false);
//                    new main_class(pin);
//                }
//                else if(e.getSource()==button2){
//                    setVisible(false);
//                    new main_class(pin);
//                }
//                catch(Exception e){
//                    e.setSource();
//                }
//            }
//            public static void main(String[]Object args){
//                new DepositAccount("");
//            }
//        }


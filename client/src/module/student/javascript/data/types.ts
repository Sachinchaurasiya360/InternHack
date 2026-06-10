
e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
J
s
S
e
c
t
i
o
n
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
o
r
d
e
r
I
n
d
e
x
:
 
n
u
m
b
e
r
;


 
 
l
e
v
e
l
:
 
"
B
e
g
i
n
n
e
r
"
 
|
 
"
I
n
t
e
r
m
e
d
i
a
t
e
"
 
|
 
"
A
d
v
a
n
c
e
d
"
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
C
o
d
e
E
x
a
m
p
l
e
 
{


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
c
o
d
e
:
 
s
t
r
i
n
g
;


 
 
o
u
t
p
u
t
?
:
 
s
t
r
i
n
g
;


 
 
e
x
p
l
a
n
a
t
i
o
n
?
:
 
s
t
r
i
n
g
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
P
r
a
c
t
i
c
e
E
x
e
r
c
i
s
e
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
s
t
r
i
n
g
;


 
 
s
o
l
u
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
e
x
p
e
c
t
e
d
O
u
t
p
u
t
:
 
s
t
r
i
n
g
;


 
 
h
i
n
t
s
:
 
s
t
r
i
n
g
[
]
;


 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
 
|
 
"
M
e
d
i
u
m
"
 
|
 
"
H
a
r
d
"
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
J
s
L
e
s
s
o
n
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
s
e
c
t
i
o
n
I
d
:
 
s
t
r
i
n
g
;


 
 
o
r
d
e
r
I
n
d
e
x
:
 
n
u
m
b
e
r
;


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
B
e
g
i
n
n
e
r
"
 
|
 
"
I
n
t
e
r
m
e
d
i
a
t
e
"
 
|
 
"
A
d
v
a
n
c
e
d
"
;


 
 
i
s
I
n
t
e
r
v
i
e
w
Q
u
e
s
t
i
o
n
:
 
b
o
o
l
e
a
n
;


 
 
c
o
n
c
e
p
t
s
:
 
s
t
r
i
n
g
[
]
;


 
 
c
o
n
t
e
n
t
:
 
{


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
 
 
c
o
d
e
E
x
a
m
p
l
e
s
:
 
C
o
d
e
E
x
a
m
p
l
e
[
]
;


 
 
 
 
n
o
t
e
s
:
 
s
t
r
i
n
g
[
]
;


 
 
 
 
c
o
m
m
o
n
P
i
t
f
a
l
l
s
?
:
 
s
t
r
i
n
g
[
]
;


 
 
 
 
i
n
t
e
r
v
i
e
w
T
i
p
s
?
:
 
s
t
r
i
n
g
[
]
;


 
 
}
;


 
 
e
x
e
r
c
i
s
e
s
?
:
 
P
r
a
c
t
i
c
e
E
x
e
r
c
i
s
e
[
]
;


}




e
x
p
o
r
t
 
t
y
p
e
 
J
s
P
r
o
g
r
e
s
s
 
=
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
{


 
 
c
o
m
p
l
e
t
e
d
:
 
b
o
o
l
e
a
n
;


 
 
e
x
e
r
c
i
s
e
s
S
o
l
v
e
d
?
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
b
o
o
l
e
a
n
>
;


}
>
;



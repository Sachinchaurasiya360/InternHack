
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
 
I
n
t
e
r
v
i
e
w
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


 
 
f
r
e
e
T
i
e
r
:
 
b
o
o
l
e
a
n
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


 
 
c
o
m
p
a
n
i
e
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


 
 
f
r
e
q
u
e
n
c
y
?
:
 
n
u
m
b
e
r
;


 
 
t
y
p
e
:
 
"
T
h
e
o
r
y
"
 
|
 
"
C
o
d
i
n
g
"
 
|
 
"
S
i
t
u
a
t
i
o
n
a
l
"
 
|
 
"
C
o
n
c
e
p
t
"
 
|
 
"
E
x
p
e
r
i
e
n
c
e
"
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


 
 
 
 
q
u
e
s
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


 
 
 
 
a
n
s
w
e
r
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
?
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


 
 
 
 
f
o
l
l
o
w
U
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
 
I
n
t
e
r
v
i
e
w
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


}
>
;



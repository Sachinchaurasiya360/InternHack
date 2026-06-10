
d
e
c
l
a
r
e
 
m
o
d
u
l
e
 
"
h
t
m
l
2
p
d
f
.
j
s
"
 
{


 
 
i
n
t
e
r
f
a
c
e
 
H
t
m
l
2
P
d
f
O
p
t
i
o
n
s
 
{


 
 
 
 
m
a
r
g
i
n
?
:
 
n
u
m
b
e
r
 
|
 
n
u
m
b
e
r
[
]
;


 
 
 
 
f
i
l
e
n
a
m
e
?
:
 
s
t
r
i
n
g
;


 
 
 
 
i
m
a
g
e
?
:
 
{
 
t
y
p
e
?
:
 
s
t
r
i
n
g
;
 
q
u
a
l
i
t
y
?
:
 
n
u
m
b
e
r
 
}
;


 
 
 
 
h
t
m
l
2
c
a
n
v
a
s
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
 
u
n
k
n
o
w
n
>
;


 
 
 
 
j
s
P
D
F
?
:
 
{
 
u
n
i
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
 
f
o
r
m
a
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
 
o
r
i
e
n
t
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
 
}
;


 
 
}


 
 
i
n
t
e
r
f
a
c
e
 
H
t
m
l
2
P
d
f
I
n
s
t
a
n
c
e
 
{


 
 
 
 
s
e
t
(
o
p
t
i
o
n
s
:
 
H
t
m
l
2
P
d
f
O
p
t
i
o
n
s
)
:
 
H
t
m
l
2
P
d
f
I
n
s
t
a
n
c
e
;


 
 
 
 
f
r
o
m
(
e
l
e
m
e
n
t
:
 
H
T
M
L
E
l
e
m
e
n
t
 
|
 
s
t
r
i
n
g
)
:
 
H
t
m
l
2
P
d
f
I
n
s
t
a
n
c
e
;


 
 
 
 
s
a
v
e
(
)
:
 
P
r
o
m
i
s
e
<
v
o
i
d
>
;


 
 
}


 
 
e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
h
t
m
l
2
p
d
f
(
)
:
 
H
t
m
l
2
P
d
f
I
n
s
t
a
n
c
e
;


}



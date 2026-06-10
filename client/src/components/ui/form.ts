
/
/
 
S
h
a
r
e
d
 
f
o
r
m
 
s
t
y
l
i
n
g
 
t
o
k
e
n
s
.
 
P
r
e
v
i
o
u
s
l
y
 
d
u
p
l
i
c
a
t
e
d
 
a
c
r
o
s
s
 
A
T
S
 
a
n
d
 
O
p
e
n


/
/
 
S
o
u
r
c
e
 
f
o
r
m
s
 
(
a
n
d
 
i
n
l
i
n
e
d
 
i
n
s
i
d
e
 
R
e
p
o
D
i
s
c
o
v
e
r
y
P
a
g
e
)
.
 
C
e
n
t
r
a
l
i
s
i
n
g
 
h
e
r
e


/
/
 
k
e
e
p
s
 
f
o
c
u
s
 
r
i
n
g
 
+
 
b
o
r
d
e
r
 
+
 
d
a
r
k
 
m
o
d
e
 
s
t
y
l
e
s
 
c
o
n
s
i
s
t
e
n
t
 
a
c
r
o
s
s
 
m
o
d
u
l
e
s
.




t
y
p
e
 
A
c
c
e
n
t
C
o
l
o
r
 
=
 
"
v
i
o
l
e
t
"
 
|
 
"
p
u
r
p
l
e
"
;




c
o
n
s
t
 
A
C
C
E
N
T
_
F
O
C
U
S
:
 
R
e
c
o
r
d
<
A
c
c
e
n
t
C
o
l
o
r
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
v
i
o
l
e
t
:
 
"
f
o
c
u
s
:
r
i
n
g
-
v
i
o
l
e
t
-
5
0
0
/
2
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
v
i
o
l
e
t
-
4
0
0
"
,


 
 
p
u
r
p
l
e
:
 
"
f
o
c
u
s
:
r
i
n
g
-
p
u
r
p
l
e
-
5
0
0
/
2
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
p
u
r
p
l
e
-
3
0
0
"
,


}
;




/
*
*


 
*
 
R
e
t
u
r
n
s
 
t
h
e
 
T
a
i
l
w
i
n
d
 
c
l
a
s
s
 
s
t
r
i
n
g
 
f
o
r
 
a
 
f
o
r
m
 
<
i
n
p
u
t
>
/
<
t
e
x
t
a
r
e
a
>
/
<
s
e
l
e
c
t
>
.


 
*
 
P
a
s
s
 
t
h
e
 
m
o
d
u
l
e
'
s
 
a
c
c
e
n
t
 
s
o
 
A
T
S
 
(
v
i
o
l
e
t
)
 
a
n
d
 
O
p
e
n
 
S
o
u
r
c
e
 
(
p
u
r
p
l
e
)
 
s
t
a
y


 
*
 
v
i
s
u
a
l
l
y
 
d
i
s
t
i
n
c
t
 
w
i
t
h
o
u
t
 
m
a
i
n
t
a
i
n
i
n
g
 
t
w
o
 
s
e
p
a
r
a
t
e
 
c
o
n
s
t
a
n
t
s
.


 
*
/


e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
g
e
t
I
n
p
u
t
C
l
s
(
a
c
c
e
n
t
:
 
A
c
c
e
n
t
C
o
l
o
r
 
=
 
"
v
i
o
l
e
t
"
)
:
 
s
t
r
i
n
g
 
{


 
 
r
e
t
u
r
n
 
[


 
 
 
 
"
w
-
f
u
l
l
 
p
x
-
3
.
5
 
p
y
-
2
.
5
 
t
e
x
t
-
s
m
"
,


 
 
 
 
"
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
x
l
"
,


 
 
 
 
"
b
g
-
g
r
a
y
-
5
0
/
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
/
5
0
"
,


 
 
 
 
"
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
5
0
0
"
,


 
 
 
 
"
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
"
,


 
 
 
 
A
C
C
E
N
T
_
F
O
C
U
S
[
a
c
c
e
n
t
]
,


 
 
]
.
j
o
i
n
(
"
 
"
)
;


}




e
x
p
o
r
t
 
c
o
n
s
t
 
l
a
b
e
l
C
l
s
 
=
 
"
b
l
o
c
k
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
m
b
-
1
"
;



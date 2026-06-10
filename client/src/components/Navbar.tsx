
i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{


 
 
M
e
n
u
,


 
 
X
,


 
 
S
e
t
t
i
n
g
s
,


 
 
L
o
g
O
u
t
,


 
 
L
a
y
o
u
t
D
a
s
h
b
o
a
r
d
,


 
 
S
u
n
,


 
 
M
o
o
n
,


}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
u
s
e
S
t
a
t
e
,
 
t
y
p
e
 
M
o
u
s
e
E
v
e
n
t
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
L
i
n
k
,
 
u
s
e
N
a
v
i
g
a
t
e
,
 
u
s
e
L
o
c
a
t
i
o
n
 
}
 
f
r
o
m
 
"
r
e
a
c
t
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
u
s
e
A
u
t
h
S
t
o
r
e
 
}
 
f
r
o
m
 
"
.
.
/
l
i
b
/
a
u
t
h
.
s
t
o
r
e
"
;


i
m
p
o
r
t
 
{
 
u
s
e
T
h
e
m
e
S
t
o
r
e
 
}
 
f
r
o
m
 
"
.
.
/
l
i
b
/
t
h
e
m
e
.
s
t
o
r
e
"
;


i
m
p
o
r
t
 
{
 
A
v
a
t
a
r
,
 
A
v
a
t
a
r
I
m
a
g
e
,
 
A
v
a
t
a
r
F
a
l
l
b
a
c
k
 
}
 
f
r
o
m
 
"
.
/
u
i
/
a
v
a
t
a
r
"
;


i
m
p
o
r
t
 
{


 
 
P
o
p
o
v
e
r
,


 
 
P
o
p
o
v
e
r
T
r
i
g
g
e
r
,


 
 
P
o
p
o
v
e
r
C
o
n
t
e
n
t
,


 
 
P
o
p
o
v
e
r
H
e
a
d
e
r
,


 
 
P
o
p
o
v
e
r
T
i
t
l
e
,


 
 
P
o
p
o
v
e
r
D
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
,


 
 
P
o
p
o
v
e
r
B
o
d
y
,


 
 
P
o
p
o
v
e
r
F
o
o
t
e
r
,


}
 
f
r
o
m
 
"
.
/
u
i
/
p
o
p
o
v
e
r
"
;


i
m
p
o
r
t
 
{
 
c
n
 
}
 
f
r
o
m
 
"
@
/
l
i
b
/
u
t
i
l
s
"
;




c
o
n
s
t
 
N
A
V
_
I
T
E
M
S
 
=
 
[


 
 
{
 
l
a
b
e
l
:
 
"
H
o
m
e
"
,
 
h
r
e
f
:
 
"
/
"
 
}
,


 
 
{
 
l
a
b
e
l
:
 
"
J
o
b
s
"
,
 
h
r
e
f
:
 
"
/
j
o
b
s
"
 
}
,


 
 
{
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
h
r
e
f
:
 
"
/
l
e
a
r
n
"
 
}
,


 
 
{
 
l
a
b
e
l
:
 
"
C
o
m
p
a
n
i
e
s
"
,
 
h
r
e
f
:
 
"
/
c
o
m
p
a
n
i
e
s
"
 
}
,


 
 
{
 
l
a
b
e
l
:
 
"
R
e
c
r
u
i
t
e
r
s
"
,
 
h
r
e
f
:
 
"
/
f
o
r
-
r
e
c
r
u
i
t
e
r
s
"
 
}
,


 
 
{
 
l
a
b
e
l
:
 
"
B
l
o
g
"
,
 
h
r
e
f
:
 
"
/
b
l
o
g
"
 
}
,


 
 
{
 
l
a
b
e
l
:
 
"
A
b
o
u
t
"
,
 
h
r
e
f
:
 
"
/
a
b
o
u
t
"
 
}
,


]
;




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
 
N
a
v
b
a
r
(
{
 
s
i
d
e
b
a
r
O
f
f
s
e
t
 
=
 
0
 
}
:
 
{
 
s
i
d
e
b
a
r
O
f
f
s
e
t
?
:
 
n
u
m
b
e
r
 
}
)
 
{


 
 
c
o
n
s
t
 
[
i
s
O
p
e
n
,
 
s
e
t
I
s
O
p
e
n
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
{
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
,
 
u
s
e
r
,
 
l
o
g
o
u
t
 
}
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
)
;


 
 
c
o
n
s
t
 
{
 
t
h
e
m
e
,
 
t
o
g
g
l
e
T
h
e
m
e
 
}
 
=
 
u
s
e
T
h
e
m
e
S
t
o
r
e
(
)
;


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
a
t
e
(
)
;


 
 
c
o
n
s
t
 
l
o
c
a
t
i
o
n
 
=
 
u
s
e
L
o
c
a
t
i
o
n
(
)
;


 
 
c
o
n
s
t
 
m
o
b
i
l
e
M
e
n
u
I
d
 
=
 
"
m
a
i
n
-
n
a
v
i
g
a
t
i
o
n
-
m
o
b
i
l
e
"
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
L
o
g
o
u
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
l
o
g
o
u
t
(
)
;


 
 
 
 
n
a
v
i
g
a
t
e
(
"
/
"
)
;


 
 
}
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
T
h
e
m
e
T
o
g
g
l
e
 
=
 
(
e
v
e
n
t
:
 
M
o
u
s
e
E
v
e
n
t
<
H
T
M
L
B
u
t
t
o
n
E
l
e
m
e
n
t
>
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
r
e
c
t
 
=
 
e
v
e
n
t
.
c
u
r
r
e
n
t
T
a
r
g
e
t
.
g
e
t
B
o
u
n
d
i
n
g
C
l
i
e
n
t
R
e
c
t
(
)
;




 
 
 
 
t
o
g
g
l
e
T
h
e
m
e
(
{


 
 
 
 
 
 
x
:
 
r
e
c
t
.
l
e
f
t
 
+
 
r
e
c
t
.
w
i
d
t
h
 
/
 
2
,


 
 
 
 
 
 
y
:
 
r
e
c
t
.
t
o
p
 
+
 
r
e
c
t
.
h
e
i
g
h
t
 
/
 
2
,


 
 
 
 
}
)
;


 
 
}
;




 
 
c
o
n
s
t
 
d
a
s
h
b
o
a
r
d
L
i
n
k
 
=


 
 
 
 
u
s
e
r
?
.
r
o
l
e
 
=
=
=
 
"
A
D
M
I
N
"


 
 
 
 
 
 
?
 
"
/
a
d
m
i
n
"


 
 
 
 
 
 
:
 
u
s
e
r
?
.
r
o
l
e
 
=
=
=
 
"
R
E
C
R
U
I
T
E
R
"


 
 
 
 
 
 
 
 
?
 
"
/
r
e
c
r
u
i
t
e
r
s
"


 
 
 
 
 
 
 
 
:
 
"
/
s
t
u
d
e
n
t
/
a
p
p
l
i
c
a
t
i
o
n
s
"
;


 
 
c
o
n
s
t
 
p
r
o
f
i
l
e
L
i
n
k
 
=


 
 
 
 
u
s
e
r
?
.
r
o
l
e
 
=
=
=
 
"
R
E
C
R
U
I
T
E
R
"
 
?
 
"
/
r
e
c
r
u
i
t
e
r
s
/
p
r
o
f
i
l
e
"
 
:
 
"
/
s
t
u
d
e
n
t
/
p
r
o
f
i
l
e
"
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
m
o
t
i
o
n
.
n
a
v


 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
y
:
 
-
1
2
,
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
y
:
 
0
,
 
o
p
a
c
i
t
y
:
 
1
 
}
}


 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
i
x
e
d
 
t
o
p
-
0
 
r
i
g
h
t
-
0
 
z
-
4
0
 
b
g
-
s
t
o
n
e
-
5
0
/
8
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
/
8
0
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
m
d
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
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
w
h
i
t
e
/
1
0
"


 
 
 
 
 
 
r
o
l
e
=
"
n
a
v
i
g
a
t
i
o
n
"


 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
"
M
a
i
n
 
n
a
v
i
g
a
t
i
o
n
"


 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
l
e
f
t
:
 
s
i
d
e
b
a
r
O
f
f
s
e
t
,
 
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
:
 
"
l
e
f
t
 
3
0
0
m
s
"
 
}
}


 
 
 
 
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
6
x
l
 
m
x
-
a
u
t
o
 
p
x
-
6
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
h
-
1
6
"
>


 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
"
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
.
5
 
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
m
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
"
/
l
o
g
o
.
p
n
g
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
"
I
n
t
e
r
n
H
a
c
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
h
-
8
 
w
-
8
 
r
o
u
n
d
e
d
-
m
d
 
o
b
j
e
c
t
-
c
o
n
t
a
i
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
-
b
o
t
t
o
m
-
0
.
5
 
-
r
i
g
h
t
-
0
.
5
 
h
-
1
.
5
 
w
-
1
.
5
 
b
g
-
l
i
m
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
b
a
s
e
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
I
n
t
e
r
n
H
a
c
k


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
h
i
d
d
e
n
 
l
g
:
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
N
A
V
_
I
T
E
M
S
.
m
a
p
(
(
i
t
e
m
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
(
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
t
e
m
.
h
r
e
f
 
=
=
=
 
"
/
"
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
 
=
=
=
 
"
/
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
t
e
m
.
h
r
e
f
 
=
=
=
 
"
/
j
o
b
s
"
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
 
=
=
=
 
"
/
j
o
b
s
"
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
.
s
t
a
r
t
s
W
i
t
h
(
"
/
j
o
b
s
/
"
)
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
 
=
=
=
 
"
/
s
t
u
d
e
n
t
/
j
o
b
s
"
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
.
s
t
a
r
t
s
W
i
t
h
(
"
/
s
t
u
d
e
n
t
/
j
o
b
s
/
"
)
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
 
=
=
=
 
"
/
i
n
t
e
r
n
s
h
i
p
s
"
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
.
s
t
a
r
t
s
W
i
t
h
(
"
/
i
n
t
e
r
n
s
h
i
p
s
/
"
)
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
 
=
=
=
 
"
/
s
t
u
d
e
n
t
/
i
n
t
e
r
n
s
h
i
p
s
"
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
.
s
t
a
r
t
s
W
i
t
h
(
"
/
s
t
u
d
e
n
t
/
i
n
t
e
r
n
s
h
i
p
s
/
"
)
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
 
=
=
=
 
"
/
e
x
t
e
r
n
a
l
-
j
o
b
s
"
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
.
s
t
a
r
t
s
W
i
t
h
(
"
/
e
x
t
e
r
n
a
l
-
j
o
b
s
/
"
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
t
e
m
.
h
r
e
f
 
=
=
=
 
"
/
c
o
m
p
a
n
i
e
s
"
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
 
=
=
=
 
"
/
c
o
m
p
a
n
i
e
s
"
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
.
s
t
a
r
t
s
W
i
t
h
(
"
/
c
o
m
p
a
n
i
e
s
/
"
)
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
 
=
=
=
 
"
/
s
t
u
d
e
n
t
/
c
o
m
p
a
n
i
e
s
"
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
.
s
t
a
r
t
s
W
i
t
h
(
"
/
s
t
u
d
e
n
t
/
c
o
m
p
a
n
i
e
s
/
"
)
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
 
=
=
=
 
"
/
y
c
"
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
.
s
t
a
r
t
s
W
i
t
h
(
"
/
y
c
/
"
)
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
 
=
=
=
 
"
/
s
t
u
d
e
n
t
/
y
c
"
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
.
s
t
a
r
t
s
W
i
t
h
(
"
/
s
t
u
d
e
n
t
/
y
c
/
"
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
 
=
=
=
 
i
t
e
m
.
h
r
e
f
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
.
s
t
a
r
t
s
W
i
t
h
(
i
t
e
m
.
h
r
e
f
 
+
 
"
/
"
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
k
e
y
=
{
i
t
e
m
.
h
r
e
f
}
 
t
o
=
{
i
t
e
m
.
h
r
e
f
}
 
a
r
i
a
-
c
u
r
r
e
n
t
=
{
a
c
t
i
v
e
 
?
 
"
p
a
g
e
"
 
:
 
u
n
d
e
f
i
n
e
d
}
 
c
l
a
s
s
N
a
m
e
=
"
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
c
n
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
g
r
o
u
p
 
r
e
l
a
t
i
v
e
 
p
x
-
3
 
p
y
-
1
.
5
 
t
e
x
t
-
s
m
 
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
 
r
o
u
n
d
e
d
-
m
d
 
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
 
d
u
r
a
t
i
o
n
-
3
0
0
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
-
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
t
e
x
t
-
s
t
o
n
e
-
6
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
s
t
o
n
e
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
c
n
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
a
b
s
o
l
u
t
e
 
l
e
f
t
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
x
-
1
/
2
 
-
b
o
t
t
o
m
-
0
.
5
 
h
-
[
2
p
x
]
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
g
-
l
i
m
e
-
4
0
0
 
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
 
d
u
r
a
t
i
o
n
-
3
0
0
 
e
a
s
e
-
o
u
t
 
o
r
i
g
i
n
-
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
w
-
f
u
l
l
 
s
c
a
l
e
-
x
-
1
0
0
 
o
p
a
c
i
t
y
-
1
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
w
-
f
u
l
l
 
s
c
a
l
e
-
x
-
0
 
o
p
a
c
i
t
y
-
0
 
g
r
o
u
p
-
h
o
v
e
r
:
s
c
a
l
e
-
x
-
1
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
o
p
a
c
i
t
y
-
1
0
0
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
h
i
d
d
e
n
 
l
g
:
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
T
h
e
m
e
T
o
g
g
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
{
t
h
e
m
e
 
=
=
=
 
"
d
a
r
k
"
 
?
 
"
S
w
i
t
c
h
 
t
o
 
l
i
g
h
t
 
m
o
d
e
"
 
:
 
"
S
w
i
t
c
h
 
t
o
 
d
a
r
k
 
m
o
d
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
p
-
2
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
2
0
0
/
6
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
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
w
h
i
t
e
/
5
 
r
o
u
n
d
e
d
-
m
d
 
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
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
h
e
m
e
 
=
=
=
 
"
d
a
r
k
"
 
?
 
(


 
 
<
S
u
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


)
 
:
 
(


 
 
<
M
o
o
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>




 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
p
o
v
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
p
o
v
e
r
T
r
i
g
g
e
r
 
a
s
C
h
i
l
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
a
r
i
a
-
h
a
s
p
o
p
u
p
=
"
m
e
n
u
"
 
a
r
i
a
-
l
a
b
e
l
=
"
O
p
e
n
 
u
s
e
r
 
m
e
n
u
"
 
c
l
a
s
s
N
a
m
e
=
"
h
-
9
 
w
-
9
 
r
o
u
n
d
e
d
-
m
d
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
p
-
0
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
v
a
t
a
r
 
c
l
a
s
s
N
a
m
e
=
"
h
-
f
u
l
l
 
w
-
f
u
l
l
 
r
o
u
n
d
e
d
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
?
.
p
r
o
f
i
l
e
P
i
c
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
v
a
t
a
r
I
m
a
g
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
u
s
e
r
.
p
r
o
f
i
l
e
P
i
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
u
s
e
r
?
.
n
a
m
e
 
?
?
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
v
a
t
a
r
F
a
l
l
b
a
c
k
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
?
.
n
a
m
e
?
.
c
h
a
r
A
t
(
0
)
.
t
o
U
p
p
e
r
C
a
s
e
(
)
 
?
?
 
"
U
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
A
v
a
t
a
r
F
a
l
l
b
a
c
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
A
v
a
t
a
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
o
p
o
v
e
r
T
r
i
g
g
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
p
o
v
e
r
C
o
n
t
e
n
t
 
a
l
i
g
n
=
"
e
n
d
"
 
s
i
d
e
O
f
f
s
e
t
=
{
8
}
 
c
l
a
s
s
N
a
m
e
=
"
w
-
6
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
p
o
v
e
r
H
e
a
d
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
v
a
t
a
r
 
c
l
a
s
s
N
a
m
e
=
"
h
-
1
0
 
w
-
1
0
 
r
o
u
n
d
e
d
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
?
.
p
r
o
f
i
l
e
P
i
c
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
v
a
t
a
r
I
m
a
g
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
u
s
e
r
.
p
r
o
f
i
l
e
P
i
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
u
s
e
r
?
.
n
a
m
e
 
?
?
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
v
a
t
a
r
F
a
l
l
b
a
c
k
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
?
.
n
a
m
e
?
.
c
h
a
r
A
t
(
0
)
.
t
o
U
p
p
e
r
C
a
s
e
(
)
 
?
?
 
"
U
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
A
v
a
t
a
r
F
a
l
l
b
a
c
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
A
v
a
t
a
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
p
o
v
e
r
T
i
t
l
e
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
?
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
o
p
o
v
e
r
T
i
t
l
e
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
p
o
v
e
r
D
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
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
?
.
e
m
a
i
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
o
p
o
v
e
r
D
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
o
p
o
v
e
r
H
e
a
d
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
p
o
v
e
r
B
o
d
y
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
1
 
p
x
-
2
 
p
y
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
{
d
a
s
h
b
o
a
r
d
L
i
n
k
}
 
c
l
a
s
s
N
a
m
e
=
"
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
1
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
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
w
h
i
t
e
/
5
 
r
o
u
n
d
e
d
-
m
d
 
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
c
o
l
o
r
s
 
t
e
x
t
-
l
e
f
t
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
a
y
o
u
t
D
a
s
h
b
o
a
r
d
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
a
s
h
b
o
a
r
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
{
p
r
o
f
i
l
e
L
i
n
k
}
 
c
l
a
s
s
N
a
m
e
=
"
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
1
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
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
w
h
i
t
e
/
5
 
r
o
u
n
d
e
d
-
m
d
 
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
c
o
l
o
r
s
 
t
e
x
t
-
l
e
f
t
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
t
t
i
n
g
s
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
e
t
t
i
n
g
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
o
p
o
v
e
r
B
o
d
y
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
p
o
v
e
r
F
o
o
t
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
L
o
g
o
u
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
b
g
-
s
t
o
n
e
-
1
0
0
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
2
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
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
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
w
h
i
t
e
/
5
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
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
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
g
O
u
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
i
g
n
 
O
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
o
p
o
v
e
r
F
o
o
t
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
o
p
o
v
e
r
C
o
n
t
e
n
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
o
p
o
v
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
l
o
g
i
n
"
 
c
l
a
s
s
N
a
m
e
=
"
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
3
 
p
y
-
1
.
5
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
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
c
o
l
o
r
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
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
-
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
i
g
n
 
I
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
r
e
g
i
s
t
e
r
"
 
c
l
a
s
s
N
a
m
e
=
"
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
4
 
p
y
-
2
 
b
g
-
l
i
m
e
-
4
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
5
0
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
r
o
u
n
d
e
d
-
m
d
 
h
o
v
e
r
:
b
g
-
l
i
m
e
-
3
0
0
 
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
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
o
r
d
e
r
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
t
a
r
t
 
f
r
e
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
l
g
:
h
i
d
d
e
n
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
T
h
e
m
e
T
o
g
g
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
h
e
m
e
 
=
=
=
 
"
d
a
r
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
S
w
i
t
c
h
 
t
o
 
l
i
g
h
t
 
m
o
d
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
S
w
i
t
c
h
 
t
o
 
d
a
r
k
 
m
o
d
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
p
-
2
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
r
o
u
n
d
e
d
-
m
d
 
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
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
h
e
m
e
 
=
=
=
 
"
d
a
r
k
"
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
u
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
o
o
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
p
o
v
e
r
 
m
o
d
a
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
p
o
v
e
r
T
r
i
g
g
e
r
 
a
s
C
h
i
l
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
a
r
i
a
-
h
a
s
p
o
p
u
p
=
"
m
e
n
u
"
 
a
r
i
a
-
l
a
b
e
l
=
"
O
p
e
n
 
u
s
e
r
 
m
e
n
u
"
 
c
l
a
s
s
N
a
m
e
=
"
h
-
9
 
w
-
9
 
r
o
u
n
d
e
d
-
m
d
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
p
-
0
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
v
a
t
a
r
 
c
l
a
s
s
N
a
m
e
=
"
h
-
f
u
l
l
 
w
-
f
u
l
l
 
r
o
u
n
d
e
d
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
?
.
p
r
o
f
i
l
e
P
i
c
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
v
a
t
a
r
I
m
a
g
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
u
s
e
r
.
p
r
o
f
i
l
e
P
i
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
u
s
e
r
?
.
n
a
m
e
 
?
?
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
v
a
t
a
r
F
a
l
l
b
a
c
k
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
?
.
n
a
m
e
?
.
c
h
a
r
A
t
(
0
)
.
t
o
U
p
p
e
r
C
a
s
e
(
)
 
?
?
 
"
U
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
A
v
a
t
a
r
F
a
l
l
b
a
c
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
A
v
a
t
a
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
o
p
o
v
e
r
T
r
i
g
g
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
p
o
v
e
r
C
o
n
t
e
n
t
 
a
l
i
g
n
=
"
e
n
d
"
 
s
i
d
e
O
f
f
s
e
t
=
{
8
}
 
c
l
a
s
s
N
a
m
e
=
"
w
-
6
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
p
o
v
e
r
H
e
a
d
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
v
a
t
a
r
 
c
l
a
s
s
N
a
m
e
=
"
h
-
1
0
 
w
-
1
0
 
r
o
u
n
d
e
d
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
?
.
p
r
o
f
i
l
e
P
i
c
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
v
a
t
a
r
I
m
a
g
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
u
s
e
r
.
p
r
o
f
i
l
e
P
i
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
u
s
e
r
?
.
n
a
m
e
 
?
?
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
v
a
t
a
r
F
a
l
l
b
a
c
k
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
?
.
n
a
m
e
?
.
c
h
a
r
A
t
(
0
)
.
t
o
U
p
p
e
r
C
a
s
e
(
)
 
?
?
 
"
U
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
A
v
a
t
a
r
F
a
l
l
b
a
c
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
A
v
a
t
a
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
p
o
v
e
r
T
i
t
l
e
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
?
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
o
p
o
v
e
r
T
i
t
l
e
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
p
o
v
e
r
D
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
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
?
.
e
m
a
i
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
o
p
o
v
e
r
D
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
o
p
o
v
e
r
H
e
a
d
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
p
o
v
e
r
B
o
d
y
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
1
 
p
x
-
2
 
p
y
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
{
d
a
s
h
b
o
a
r
d
L
i
n
k
}
 
c
l
a
s
s
N
a
m
e
=
"
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
1
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
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
w
h
i
t
e
/
5
 
r
o
u
n
d
e
d
-
m
d
 
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
c
o
l
o
r
s
 
t
e
x
t
-
l
e
f
t
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
a
y
o
u
t
D
a
s
h
b
o
a
r
d
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
a
s
h
b
o
a
r
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
{
p
r
o
f
i
l
e
L
i
n
k
}
 
c
l
a
s
s
N
a
m
e
=
"
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
1
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
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
w
h
i
t
e
/
5
 
r
o
u
n
d
e
d
-
m
d
 
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
c
o
l
o
r
s
 
t
e
x
t
-
l
e
f
t
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
t
t
i
n
g
s
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
e
t
t
i
n
g
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
o
p
o
v
e
r
B
o
d
y
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
o
p
o
v
e
r
F
o
o
t
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
L
o
g
o
u
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
b
g
-
s
t
o
n
e
-
1
0
0
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
2
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
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
g
-
w
h
i
t
e
/
5
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
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
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
g
O
u
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
i
g
n
 
O
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
o
p
o
v
e
r
F
o
o
t
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
o
p
o
v
e
r
C
o
n
t
e
n
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
o
p
o
v
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
I
s
O
p
e
n
(
!
i
s
O
p
e
n
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
e
x
p
a
n
d
e
d
=
{
i
s
O
p
e
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
c
o
n
t
r
o
l
s
=
{
m
o
b
i
l
e
M
e
n
u
I
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
{
i
s
O
p
e
n
 
?
 
"
C
l
o
s
e
 
m
e
n
u
"
 
:
 
"
O
p
e
n
 
m
e
n
u
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
p
-
2
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
2
0
0
/
6
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
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
w
h
i
t
e
/
5
 
r
o
u
n
d
e
d
-
m
d
 
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
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
O
p
e
n
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
n
u
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
 
 
{
i
s
O
p
e
n
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
{
m
o
b
i
l
e
M
e
n
u
I
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
h
e
i
g
h
t
:
 
0
,
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
,
 
o
p
a
c
i
t
y
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
h
e
i
g
h
t
:
 
0
,
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
l
g
:
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
r
o
l
e
=
"
m
e
n
u
"
 
a
r
i
a
-
l
a
b
e
l
=
"
M
o
b
i
l
e
 
n
a
v
i
g
a
t
i
o
n
"
 
c
l
a
s
s
N
a
m
e
=
"
p
t
-
2
 
p
b
-
4
 
s
p
a
c
e
-
y
-
1
 
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
s
t
o
n
e
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
w
h
i
t
e
/
1
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
N
A
V
_
I
T
E
M
S
.
m
a
p
(
(
i
t
e
m
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
o
b
i
l
e
N
a
v
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
t
e
m
.
h
r
e
f
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
i
t
e
m
.
h
r
e
f
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
I
s
O
p
e
n
(
f
a
l
s
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
M
o
b
i
l
e
N
a
v
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
t
-
3
 
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
d
a
s
h
b
o
a
r
d
L
i
n
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
I
s
O
p
e
n
(
f
a
l
s
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
7
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
s
t
o
n
e
-
3
0
0
 
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
 
r
o
u
n
d
e
d
-
m
d
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
w
h
i
t
e
/
5
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
a
s
h
b
o
a
r
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
a
n
d
l
e
L
o
g
o
u
t
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
I
s
O
p
e
n
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
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
 
p
y
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
7
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
s
t
o
n
e
-
3
0
0
 
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
l
e
f
t
 
r
o
u
n
d
e
d
-
m
d
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
w
h
i
t
e
/
5
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
L
o
g
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
"
/
l
o
g
i
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
I
s
O
p
e
n
(
f
a
l
s
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
7
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
s
t
o
n
e
-
3
0
0
 
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
 
r
o
u
n
d
e
d
-
m
d
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
w
h
i
t
e
/
5
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
i
g
n
 
I
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
"
/
r
e
g
i
s
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
I
s
O
p
e
n
(
f
a
l
s
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
c
l
a
s
s
N
a
m
e
=
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
4
 
p
y
-
2
.
5
 
b
g
-
l
i
m
e
-
4
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
5
0
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
r
o
u
n
d
e
d
-
m
d
 
h
o
v
e
r
:
b
g
-
l
i
m
e
-
3
0
0
 
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
c
o
l
o
r
s
 
b
o
r
d
e
r
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
t
a
r
t
 
f
r
e
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
m
o
t
i
o
n
.
n
a
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
M
o
b
i
l
e
N
a
v
L
i
n
k
(
{


 
 
h
r
e
f
,


 
 
c
h
i
l
d
r
e
n
,


 
 
o
n
C
l
i
c
k
,


}
:
 
{


 
 
h
r
e
f
:
 
s
t
r
i
n
g
;


 
 
c
h
i
l
d
r
e
n
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
;


 
 
o
n
C
l
i
c
k
?
:
 
(
)
 
=
>
 
v
o
i
d
;


}
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
t
o
=
{
h
r
e
f
}


 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
o
n
C
l
i
c
k
}


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
1
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
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
w
h
i
t
e
/
5
 
r
o
u
n
d
e
d
-
m
d
 
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
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
>


 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
}


 
 
 
 
<
/
L
i
n
k
>


 
 
)
;


}



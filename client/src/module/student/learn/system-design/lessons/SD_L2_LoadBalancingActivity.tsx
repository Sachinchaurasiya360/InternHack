
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
 
u
s
e
E
f
f
e
c
t
,
 
u
s
e
R
e
f
 
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
 
m
o
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


 
 
S
h
a
r
e
2
,
 
S
h
u
f
f
l
e
,
 
A
c
t
i
v
i
t
y
,
 
H
e
a
r
t
,
 
P
l
a
y
,
 
P
a
u
s
e
,
 
R
o
t
a
t
e
C
c
w
,


 
 
A
l
e
r
t
T
r
i
a
n
g
l
e
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
 
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
 
f
r
o
m
 
"
@
/
c
o
m
p
o
n
e
n
t
s
/
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
Q
u
i
z
Q
u
e
s
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
@
/
c
o
m
p
o
n
e
n
t
s
/
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
{


 
 
S
D
,


 
 
S
D
_
S
O
F
T
,


 
 
M
O
N
O
,


 
 
s
e
c
t
i
o
n
T
i
t
l
e
,


 
 
s
e
c
t
i
o
n
D
e
s
c
,


 
 
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
,


 
 
c
a
r
d
E
n
t
r
a
n
c
e
,


 
 
c
a
r
d
H
o
v
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
_
s
h
a
r
e
d
/
s
t
y
l
e
s
"
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
W
h
y
 
+
 
a
l
g
o
r
i
t
h
m
 
v
i
s
u
a
l
i
z
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




t
y
p
e
 
A
l
g
o
 
=
 
"
r
o
u
n
d
-
r
o
b
i
n
"
 
|
 
"
l
e
a
s
t
-
c
o
n
n
"
 
|
 
"
i
p
-
h
a
s
h
"
 
|
 
"
w
e
i
g
h
t
e
d
"
;




i
n
t
e
r
f
a
c
e
 
S
e
r
v
e
r
S
t
a
t
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


 
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;


 
 
w
e
i
g
h
t
:
 
n
u
m
b
e
r
;


 
 
a
c
t
i
v
e
:
 
n
u
m
b
e
r
;
 
/
/
 
c
u
r
r
e
n
t
 
i
n
-
f
l
i
g
h
t
 
r
e
q
s


 
 
s
e
r
v
e
d
:
 
n
u
m
b
e
r
;
 
/
/
 
t
o
t
a
l
 
s
e
r
v
e
d


}




c
o
n
s
t
 
I
N
I
T
I
A
L
_
S
E
R
V
E
R
S
 
=
 
(
)
:
 
S
e
r
v
e
r
S
t
a
t
e
[
]
 
=
>
 
[


 
 
{
 
i
d
:
 
"
A
"
,
 
c
o
l
o
r
:
 
"
#
6
3
6
6
f
1
"
,
 
w
e
i
g
h
t
:
 
1
,
 
a
c
t
i
v
e
:
 
0
,
 
s
e
r
v
e
d
:
 
0
 
}
,


 
 
{
 
i
d
:
 
"
B
"
,
 
c
o
l
o
r
:
 
"
#
1
0
b
9
8
1
"
,
 
w
e
i
g
h
t
:
 
1
,
 
a
c
t
i
v
e
:
 
0
,
 
s
e
r
v
e
d
:
 
0
 
}
,


 
 
{
 
i
d
:
 
"
C
"
,
 
c
o
l
o
r
:
 
"
#
f
5
9
e
0
b
"
,
 
w
e
i
g
h
t
:
 
3
,
 
a
c
t
i
v
e
:
 
0
,
 
s
e
r
v
e
d
:
 
0
 
}
,
 
 
/
/
 
h
e
a
v
i
e
r
 
b
o
x


 
 
{
 
i
d
:
 
"
D
"
,
 
c
o
l
o
r
:
 
"
#
e
c
4
8
9
9
"
,
 
w
e
i
g
h
t
:
 
1
,
 
a
c
t
i
v
e
:
 
0
,
 
s
e
r
v
e
d
:
 
0
 
}
,


]
;




f
u
n
c
t
i
o
n
 
A
l
g
o
r
i
t
h
m
L
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
a
l
g
o
,
 
s
e
t
A
l
g
o
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
<
A
l
g
o
>
(
"
r
o
u
n
d
-
r
o
b
i
n
"
)
;


 
 
c
o
n
s
t
 
[
s
e
r
v
e
r
s
,
 
s
e
t
S
e
r
v
e
r
s
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
<
S
e
r
v
e
r
S
t
a
t
e
[
]
>
(
I
N
I
T
I
A
L
_
S
E
R
V
E
R
S
(
)
)
;


 
 
c
o
n
s
t
 
[
r
u
n
n
i
n
g
,
 
s
e
t
R
u
n
n
i
n
g
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
 
[
r
e
q
C
o
u
n
t
,
 
s
e
t
R
e
q
C
o
u
n
t
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
0
)
;


 
 
c
o
n
s
t
 
r
r
I
d
x
 
=
 
u
s
e
R
e
f
(
0
)
;


 
 
c
o
n
s
t
 
h
a
s
h
C
o
u
n
t
e
r
 
=
 
u
s
e
R
e
f
(
0
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
r
u
n
n
i
n
g
)
 
r
e
t
u
r
n
;


 
 
 
 
c
o
n
s
t
 
t
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
S
e
r
v
e
r
s
(
(
p
r
e
v
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
x
t
 
=
 
p
r
e
v
.
m
a
p
(
(
s
)
 
=
>
 
(
{
 
.
.
.
s
 
}
)
)
;


 
 
 
 
 
 
 
 
l
e
t
 
t
a
r
g
e
t
:
 
S
e
r
v
e
r
S
t
a
t
e
 
|
 
u
n
d
e
f
i
n
e
d
;




 
 
 
 
 
 
 
 
i
f
 
(
a
l
g
o
 
=
=
=
 
"
r
o
u
n
d
-
r
o
b
i
n
"
)
 
{


 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
 
=
 
n
e
x
t
[
r
r
I
d
x
.
c
u
r
r
e
n
t
 
%
 
n
e
x
t
.
l
e
n
g
t
h
]
;


 
 
 
 
 
 
 
 
 
 
r
r
I
d
x
.
c
u
r
r
e
n
t
+
+
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
a
l
g
o
 
=
=
=
 
"
l
e
a
s
t
-
c
o
n
n
"
)
 
{


 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
 
=
 
[
.
.
.
n
e
x
t
]
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
a
.
a
c
t
i
v
e
 
-
 
b
.
a
c
t
i
v
e
)
[
0
]
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
a
l
g
o
 
=
=
=
 
"
i
p
-
h
a
s
h
"
)
 
{


 
 
 
 
 
 
 
 
 
 
/
/
 
S
i
m
u
l
a
t
e
 
a
 
s
m
a
l
l
 
p
o
o
l
 
o
f
 
r
e
p
e
a
t
 
c
l
i
e
n
t
s
 
s
o
 
t
h
e
 
s
a
m
e
 
c
l
i
e
n
t


 
 
 
 
 
 
 
 
 
 
/
/
 
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
l
y
 
l
a
n
d
s
 
o
n
 
t
h
e
 
s
a
m
e
 
s
e
r
v
e
r
 
-
 
t
h
e
 
a
c
t
u
a
l
 
i
n
v
a
r
i
a
n
t
 
I
P
-
h
a
s
h
 
p
r
o
v
i
d
e
s
.


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
N
U
M
_
C
L
I
E
N
T
S
 
=
 
5
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
l
i
e
n
t
I
d
 
=
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
N
U
M
_
C
L
I
E
N
T
S
)
;


 
 
 
 
 
 
 
 
 
 
h
a
s
h
C
o
u
n
t
e
r
.
c
u
r
r
e
n
t
 
=
 
c
l
i
e
n
t
I
d
;
 
/
/
 
k
e
e
p
 
r
e
f
 
a
l
i
v
e
 
(
u
s
e
d
 
o
n
l
y
 
f
o
r
 
c
l
a
r
i
t
y
)


 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
 
=
 
n
e
x
t
[
c
l
i
e
n
t
I
d
 
%
 
n
e
x
t
.
l
e
n
g
t
h
]
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
a
l
g
o
 
=
=
=
 
"
w
e
i
g
h
t
e
d
"
)
 
{


 
 
 
 
 
 
 
 
 
 
/
/
 
e
x
p
a
n
d
 
b
y
 
w
e
i
g
h
t


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
o
o
l
:
 
S
e
r
v
e
r
S
t
a
t
e
[
]
 
=
 
[
]
;


 
 
 
 
 
 
 
 
 
 
n
e
x
t
.
f
o
r
E
a
c
h
(
(
s
)
 
=
>
 
{
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
s
.
w
e
i
g
h
t
;
 
i
+
+
)
 
p
o
o
l
.
p
u
s
h
(
s
)
;
 
}
)
;


 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
 
=
 
p
o
o
l
[
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
p
o
o
l
.
l
e
n
g
t
h
)
]
;


 
 
 
 
 
 
 
 
}




 
 
 
 
 
 
 
 
i
f
 
(
t
a
r
g
e
t
)
 
{


 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
.
a
c
t
i
v
e
+
+
;


 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
.
s
e
r
v
e
d
+
+
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
x
t
;


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
s
e
t
R
e
q
C
o
u
n
t
(
(
c
)
 
=
>
 
c
 
+
 
1
)
;




 
 
 
 
 
 
/
/
 
d
r
a
i
n
 
o
l
d
 
r
e
q
u
e
s
t
s
 
a
f
t
e
r
 
a
 
d
e
l
a
y


 
 
 
 
 
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
s
e
t
S
e
r
v
e
r
s
(
(
p
r
e
v
)
 
=
>
 
p
r
e
v
.
m
a
p
(
(
s
)
 
=
>
 
(
{
 
.
.
.
s
,
 
a
c
t
i
v
e
:
 
M
a
t
h
.
m
a
x
(
0
,
 
s
.
a
c
t
i
v
e
 
-
 
1
)
 
}
)
)
)
;


 
 
 
 
 
 
}
,
 
a
l
g
o
 
=
=
=
 
"
l
e
a
s
t
-
c
o
n
n
"
 
?
 
7
0
0
 
+
 
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
1
5
0
0
 
:
 
6
0
0
)
;


 
 
 
 
}
,
 
4
0
0
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
t
)
;


 
 
}
,
 
[
r
u
n
n
i
n
g
,
 
a
l
g
o
]
)
;




 
 
f
u
n
c
t
i
o
n
 
r
e
s
e
t
(
)
 
{


 
 
 
 
s
e
t
R
u
n
n
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
s
e
t
S
e
r
v
e
r
s
(
I
N
I
T
I
A
L
_
S
E
R
V
E
R
S
(
)
)
;


 
 
 
 
s
e
t
R
e
q
C
o
u
n
t
(
0
)
;


 
 
 
 
r
r
I
d
x
.
c
u
r
r
e
n
t
 
=
 
0
;


 
 
 
 
h
a
s
h
C
o
u
n
t
e
r
.
c
u
r
r
e
n
t
 
=
 
0
;


 
 
}




 
 
c
o
n
s
t
 
A
L
G
O
S
:
 
{
 
i
d
:
 
A
l
g
o
;
 
l
a
b
e
l
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
:
 
s
t
r
i
n
g
 
}
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
r
o
u
n
d
-
r
o
b
i
n
"
,
 
l
a
b
e
l
:
 
"
R
o
u
n
d
 
R
o
b
i
n
"
,
 
 
 
 
 
 
 
d
e
s
c
:
 
"
R
o
t
a
t
e
 
t
h
r
o
u
g
h
 
s
e
r
v
e
r
s
 
i
n
 
o
r
d
e
r
.
 
S
i
m
p
l
e
,
 
w
o
r
k
s
 
w
h
e
n
 
s
e
r
v
e
r
s
 
a
r
e
 
e
q
u
a
l
.
"
 
}
,


 
 
 
 
{
 
i
d
:
 
"
l
e
a
s
t
-
c
o
n
n
"
,
 
 
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
s
t
 
C
o
n
n
e
c
t
i
o
n
s
"
,
 
d
e
s
c
:
 
"
S
e
n
d
 
n
e
x
t
 
r
e
q
u
e
s
t
 
t
o
 
w
h
i
c
h
e
v
e
r
 
s
e
r
v
e
r
 
h
a
s
 
f
e
w
e
s
t
 
a
c
t
i
v
e
 
r
e
q
u
e
s
t
s
.
 
G
o
o
d
 
w
h
e
n
 
r
e
q
u
e
s
t
 
d
u
r
a
t
i
o
n
s
 
v
a
r
y
.
"
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
p
-
h
a
s
h
"
,
 
 
 
 
 
l
a
b
e
l
:
 
"
I
P
 
H
a
s
h
"
,
 
 
 
 
 
 
 
 
 
 
 
d
e
s
c
:
 
"
H
a
s
h
 
t
h
e
 
c
l
i
e
n
t
 
I
P
 
→
 
a
l
w
a
y
s
 
r
o
u
t
e
 
s
a
m
e
 
c
l
i
e
n
t
 
t
o
 
s
a
m
e
 
s
e
r
v
e
r
.
 
U
s
e
f
u
l
 
f
o
r
 
s
t
i
c
k
y
 
s
e
s
s
i
o
n
s
.
"
 
}
,


 
 
 
 
{
 
i
d
:
 
"
w
e
i
g
h
t
e
d
"
,
 
 
 
 
l
a
b
e
l
:
 
"
W
e
i
g
h
t
e
d
"
,
 
 
 
 
 
 
 
 
 
 
d
e
s
c
:
 
"
D
i
s
t
r
i
b
u
t
e
 
p
r
o
p
o
r
t
i
o
n
a
l
 
t
o
 
s
e
r
v
e
r
 
c
a
p
a
c
i
t
y
 
(
w
e
i
g
h
t
)
.
 
S
e
r
v
e
r
 
C
 
h
a
s
 
w
e
i
g
h
t
 
3
 
-
 
g
e
t
s
 
3
×
 
t
h
e
 
t
r
a
f
f
i
c
.
"
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
c
u
r
 
=
 
A
L
G
O
S
.
f
i
n
d
(
(
a
)
 
=
>
 
a
.
i
d
 
=
=
=
 
a
l
g
o
)
!
;


 
 
c
o
n
s
t
 
t
o
t
a
l
 
=
 
s
e
r
v
e
r
s
.
r
e
d
u
c
e
(
(
s
u
m
,
 
s
)
 
=
>
 
s
u
m
 
+
 
s
.
s
e
r
v
e
d
,
 
0
)
 
|
|
 
1
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
T
h
e
 
4
 
l
o
a
d
-
b
a
l
a
n
c
i
n
g
 
a
l
g
o
r
i
t
h
m
s
 
y
o
u
 
m
u
s
t
 
k
n
o
w
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
A
 
l
o
a
d
 
b
a
l
a
n
c
e
r
&
r
s
q
u
o
;
s
 
e
n
t
i
r
e
 
j
o
b
 
i
s
 
<
e
m
>
p
i
c
k
 
a
 
b
a
c
k
e
n
d
<
/
e
m
>
.
 
H
o
w
 
i
t
 
p
i
c
k
s
 
s
e
p
a
r
a
t
e
s
 
a


 
 
 
 
 
 
 
 
s
i
m
p
l
e
 
L
B
 
f
r
o
m
 
a
 
p
r
o
d
u
c
t
i
o
n
-
g
r
a
d
e
 
o
n
e
.
 
F
l
i
p
 
b
e
t
w
e
e
n
 
a
l
g
o
r
i
t
h
m
s
 
b
e
l
o
w
 
a
n
d
 
w
a
t
c
h
 
t
h
e


 
 
 
 
 
 
 
 
d
i
s
t
r
i
b
u
t
i
o
n
 
c
h
a
n
g
e
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
{
/
*
 
A
l
g
o
r
i
t
h
m
 
p
i
c
k
e
r
 
*
/
}


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
4
,
 
1
f
r
)
"
,
 
g
a
p
:
 
8
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
4
 
}
}
>


 
 
 
 
 
 
 
 
{
A
L
G
O
S
.
m
a
p
(
(
a
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
o
n
 
=
 
a
.
i
d
 
=
=
=
 
a
l
g
o
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
a
.
i
d
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
 
{
 
r
e
s
e
t
(
)
;
 
s
e
t
A
l
g
o
(
a
.
i
d
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
8
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
o
n
 
?
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
 
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
o
n
 
?
 
S
D
_
S
O
F
T
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
-
s
u
b
t
l
e
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
2
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
o
n
 
?
 
S
D
 
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
l
i
g
n
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
.
l
a
b
e
l
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


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
S
D
_
S
O
F
T
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
4
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
S
D
 
}
}
>
{
c
u
r
.
l
a
b
e
l
}
:
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
{
c
u
r
.
d
e
s
c
}


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
C
o
n
t
r
o
l
s
 
*
/
}


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
1
0
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
4
 
}
}
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
 
s
e
t
R
u
n
n
i
n
g
(
(
r
)
 
=
>
 
!
r
)
}


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
r
u
n
n
i
n
g
 
?
 
S
D
 
:
 
"
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
"
,
 
c
o
l
o
r
:
 
r
u
n
n
i
n
g
 
?
 
"
#
f
f
f
"
 
:
 
S
D
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
6
0
0
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
i
n
g
 
?
 
<
P
a
u
s
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
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>
 
:
 
<
P
l
a
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
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
i
n
g
 
?
 
"
P
a
u
s
e
"
 
:
 
"
S
e
n
d
 
t
r
a
f
f
i
c
"
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
r
e
s
e
t
}


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
2
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
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
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
r
e
m
"
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
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
3
.
5
 
h
-
3
.
5
"
 
/
>
 
R
e
s
e
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
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
T
o
t
a
l
 
d
i
s
p
a
t
c
h
e
d
:
 
{
r
e
q
C
o
u
n
t
}


 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
S
e
r
v
e
r
 
g
r
i
d
 
*
/
}


 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
}


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
s
h
o
w
"


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
4
,
 
1
f
r
)
"
,
 
g
a
p
:
 
1
0
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
s
e
r
v
e
r
s
.
m
a
p
(
(
s
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
c
t
 
=
 
(
s
.
s
e
r
v
e
d
 
/
 
t
o
t
a
l
)
 
*
 
1
0
0
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
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
c
a
r
d
E
n
t
r
a
n
c
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
c
a
r
d
H
o
v
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
s
.
c
o
l
o
r
}
`
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
s
.
c
o
l
o
r
}
1
0
`
,
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
s
p
a
c
e
-
b
e
t
w
e
e
n
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
5
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
s
.
c
o
l
o
r
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
e
r
v
e
r
 
{
s
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
l
g
o
 
=
=
=
 
"
w
e
i
g
h
t
e
d
"
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
=
{
s
.
w
e
i
g
h
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
:
 
<
b
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
s
.
c
o
l
o
r
 
}
}
>
{
s
.
a
c
t
i
v
e
}
<
/
b
>
 
·
 
s
e
r
v
e
d
:
 
<
b
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>
{
s
.
s
e
r
v
e
d
}
<
/
b
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
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
 
6
,
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
3
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
`
$
{
p
c
t
}
%
`
,
 
h
e
i
g
h
t
:
 
"
1
0
0
%
"
,
 
b
a
c
k
g
r
o
u
n
d
:
 
s
.
c
o
l
o
r
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
w
i
d
t
h
 
3
0
0
m
s
"
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
m
a
r
g
i
n
T
o
p
:
 
4
,
 
t
e
x
t
A
l
i
g
n
:
 
"
r
i
g
h
t
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
c
t
.
t
o
F
i
x
e
d
(
0
)
}
%


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
L
4
 
v
s
 
L
7
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




f
u
n
c
t
i
o
n
 
L
a
y
e
r
s
4
v
s
7
(
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
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
L
o
a
d
 
b
a
l
a
n
c
e
r
s
 
c
o
m
e
 
i
n
 
t
w
o
 
f
l
a
v
o
r
s
:
 
L
4
 
a
n
d
 
L
7
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
Y
o
u
&
r
s
q
u
o
;
l
l
 
h
e
a
r
 
&
l
d
q
u
o
;
L
a
y
e
r
 
4
&
r
d
q
u
o
;
 
a
n
d
 
&
l
d
q
u
o
;
L
a
y
e
r
 
7
&
r
d
q
u
o
;
 
c
o
n
s
t
a
n
t
l
y
.
 
T
h
e
y
 
r
e
f
e
r
 
t
o


 
 
 
 
 
 
 
 
t
h
e
 
O
S
I
 
l
a
y
e
r
 
t
h
e
 
L
B
 
o
p
e
r
a
t
e
s
 
a
t
.
 
L
4
 
w
o
r
k
s
 
a
t
 
t
h
e
 
t
r
a
n
s
p
o
r
t
 
l
a
y
e
r
 
(
T
C
P
)
.
 
L
7
 
w
o
r
k
s
 
a
t
 
t
h
e


 
 
 
 
 
 
 
 
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
 
l
a
y
e
r
 
(
H
T
T
P
)
.
 
T
h
e
 
t
r
a
d
e
o
f
f
s
 
m
a
t
t
e
r
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
1
f
r
 
1
f
r
"
,
 
g
a
p
:
 
1
4
 
}
}
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
L
a
y
e
r
 
4
 
(
T
r
a
n
s
p
o
r
t
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
8
b
5
c
f
6
"
,


 
 
 
 
 
 
 
 
 
 
 
 
s
e
e
s
:
 
"
S
o
u
r
c
e
 
I
P
,
 
d
e
s
t
 
I
P
,
 
p
o
r
t
s
,
 
p
r
o
t
o
c
o
l
.
 
N
o
t
h
i
n
g
 
a
b
o
v
e
 
t
h
a
t
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
a
n
t
:
 
"
C
a
n
'
t
 
l
o
o
k
 
i
n
s
i
d
e
 
t
h
e
 
p
a
c
k
e
t
.
 
N
o
 
i
d
e
a
 
w
h
a
t
 
U
R
L
 
w
a
s
 
r
e
q
u
e
s
t
e
d
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
s
:
 
[
"
E
x
t
r
e
m
e
l
y
 
f
a
s
t
 
-
 
j
u
s
t
 
f
o
r
w
a
r
d
s
 
p
a
c
k
e
t
s
"
,
 
"
L
o
w
 
C
P
U
,
 
l
o
w
 
l
a
t
e
n
c
y
 
o
v
e
r
h
e
a
d
"
,
 
"
W
o
r
k
s
 
f
o
r
 
a
n
y
 
T
C
P
/
U
D
P
 
p
r
o
t
o
c
o
l
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
:
 
[
"
C
a
n
'
t
 
r
o
u
t
e
 
o
n
 
U
R
L
 
p
a
t
h
,
 
h
e
a
d
e
r
s
,
 
o
r
 
c
o
o
k
i
e
s
 
-
 
d
o
e
s
n
'
t
 
p
a
r
s
e
 
H
T
T
P
"
,
 
"
T
L
S
 
p
a
s
s
t
h
r
o
u
g
h
 
o
r
 
t
e
r
m
i
n
a
t
i
o
n
 
i
s
 
p
o
s
s
i
b
l
e
,
 
b
u
t
 
c
o
n
t
e
n
t
-
a
w
a
r
e
 
r
u
l
e
s
 
a
r
e
n
'
t
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
e
x
a
m
p
l
e
s
:
 
"
A
W
S
 
N
L
B
,
 
H
A
P
r
o
x
y
 
(
T
C
P
 
m
o
d
e
)
,
 
N
g
i
n
x
 
s
t
r
e
a
m
"
,


 
 
 
 
 
 
 
 
 
 
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
a
y
e
r
 
7
 
(
A
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
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
1
0
b
9
8
1
"
,


 
 
 
 
 
 
 
 
 
 
 
 
s
e
e
s
:
 
"
T
h
e
 
f
u
l
l
 
H
T
T
P
 
r
e
q
u
e
s
t
 
-
 
m
e
t
h
o
d
,
 
p
a
t
h
,
 
h
e
a
d
e
r
s
,
 
c
o
o
k
i
e
s
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
a
n
t
:
 
"
S
l
i
g
h
t
l
y
 
s
l
o
w
e
r
 
b
e
c
a
u
s
e
 
i
t
 
t
e
r
m
i
n
a
t
e
s
 
T
C
P
 
a
n
d
 
p
a
r
s
e
s
 
H
T
T
P
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
s
:
 
[
"
R
o
u
t
e
s
 
b
y
 
U
R
L
:
 
/
a
p
i
/
*
 
→
 
A
P
I
 
t
i
e
r
,
 
/
i
m
a
g
e
s
/
*
 
→
 
C
D
N
 
o
r
i
g
i
n
"
,
 
"
H
a
n
d
l
e
s
 
T
L
S
 
t
e
r
m
i
n
a
t
i
o
n
,
 
r
e
q
u
e
s
t
 
r
e
w
r
i
t
i
n
g
,
 
a
u
t
h
"
,
 
"
C
a
n
 
d
o
 
s
t
i
c
k
y
 
s
e
s
s
i
o
n
s
 
b
y
 
c
o
o
k
i
e
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
:
 
[
"
H
i
g
h
e
r
 
C
P
U
 
p
e
r
 
r
e
q
u
e
s
t
"
,
 
"
P
r
o
t
o
c
o
l
-
s
p
e
c
i
f
i
c
 
(
H
T
T
P
/
g
R
P
C
/
W
e
b
S
o
c
k
e
t
/
e
t
c
.
)
 
-
 
n
o
t
 
a
 
g
e
n
e
r
i
c
 
T
C
P
 
f
o
r
w
a
r
d
e
r
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
e
x
a
m
p
l
e
s
:
 
"
A
W
S
 
A
L
B
,
 
N
g
i
n
x
,
 
E
n
v
o
y
,
 
C
l
o
u
d
f
l
a
r
e
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
c
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
c
.
c
o
l
o
r
}
`
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
c
.
c
o
l
o
r
}
1
0
`
,
 
p
a
d
d
i
n
g
:
 
"
1
6
p
x
 
2
0
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
1
.
0
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
c
.
c
o
l
o
r
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
l
a
b
e
l
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
2
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
>
S
e
e
s
:
 
<
/
b
>
{
c
.
s
e
e
s
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
2
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
>
L
i
m
i
t
:
 
<
/
b
>
{
c
.
c
a
n
t
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
8
r
e
m
"
,
 
c
o
l
o
r
:
 
c
.
c
o
l
o
r
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>
P
R
O
S
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
u
l
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
:
 
"
0
 
0
 
1
0
p
x
"
,
 
p
a
d
d
i
n
g
L
e
f
t
:
 
1
6
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
2
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
p
r
o
s
.
m
a
p
(
(
p
)
 
=
>
 
<
l
i
 
k
e
y
=
{
p
}
>
{
p
}
<
/
l
i
>
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
8
r
e
m
"
,
 
c
o
l
o
r
:
 
S
D
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>
C
O
N
S
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
u
l
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
:
 
"
0
 
0
 
1
0
p
x
"
,
 
p
a
d
d
i
n
g
L
e
f
t
:
 
1
6
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
2
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
c
o
n
s
.
m
a
p
(
(
p
)
 
=
>
 
<
l
i
 
k
e
y
=
{
p
}
>
{
p
}
<
/
l
i
>
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
6
r
e
m
"
,
 
p
a
d
d
i
n
g
:
 
"
6
p
x
 
1
0
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
)
"
,
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
c
.
c
o
l
o
r
}
4
0
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
c
.
c
o
l
o
r
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
e
x
a
m
p
l
e
s
:
 
<
/
s
p
a
n
>
{
c
.
e
x
a
m
p
l
e
s
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


 
 
 
 
 
 
 
 
)
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


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
H
e
a
l
t
h
 
c
h
e
c
k
s
 
+
 
s
t
i
c
k
y
 
s
e
s
s
i
o
n
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




f
u
n
c
t
i
o
n
 
E
s
s
e
n
t
i
a
l
s
(
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
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
T
h
e
 
3
 
t
h
i
n
g
s
 
a
n
 
L
B
 
d
o
e
s
 
b
e
y
o
n
d
 
r
o
u
t
i
n
g
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
A
 
r
e
a
l
 
L
B
 
i
s
n
&
r
s
q
u
o
;
t
 
j
u
s
t
 
a
 
t
r
a
f
f
i
c
 
s
p
l
i
t
t
e
r
.
 
I
t
&
r
s
q
u
o
;
s
 
t
h
e
 
t
h
i
n
g
 
s
t
a
n
d
i
n
g
 
b
e
t
w
e
e
n
 
a
 
d
e
a
d


 
 
 
 
 
 
 
 
b
a
c
k
e
n
d
 
a
n
d
 
y
o
u
r
 
u
s
e
r
s
.
 
T
h
r
e
e
 
f
e
a
t
u
r
e
s
 
m
a
k
e
 
i
t
 
p
r
o
d
u
c
t
i
o
n
-
r
e
a
d
y
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
g
a
p
:
 
1
2
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
2
2
 
}
}
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
<
H
e
a
r
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
5
 
h
-
5
"
 
/
>
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
S
D
,


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
H
e
a
l
t
h
 
c
h
e
c
k
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
d
y
:
 
"
L
B
 
p
i
n
g
s
 
e
v
e
r
y
 
b
a
c
k
e
n
d
 
e
v
e
r
y
 
f
e
w
 
s
e
c
o
n
d
s
 
(
e
.
g
.
,
 
G
E
T
 
/
h
e
a
l
t
h
z
)
.
 
I
f
 
t
h
e
 
b
o
x
 
f
a
i
l
s
 
N
 
c
h
e
c
k
s
 
i
n
 
a
 
r
o
w
,
 
i
t
&
r
s
q
u
o
;
s
 
m
a
r
k
e
d
 
u
n
h
e
a
l
t
h
y
 
a
n
d
 
r
e
m
o
v
e
d
 
f
r
o
m
 
r
o
t
a
t
i
o
n
.
 
W
h
e
n
 
i
t
 
r
e
c
o
v
e
r
s
,
 
i
t
 
r
e
j
o
i
n
s
.
 
T
h
i
s
 
i
s
 
h
o
w
 
y
o
u
 
g
e
t
 
z
e
r
o
-
d
o
w
n
t
i
m
e
 
d
e
p
l
o
y
s
 
-
 
t
a
k
e
 
a
 
b
o
x
 
o
u
t
,
 
s
h
i
p
,
 
h
e
a
l
t
h
-
c
h
e
c
k
 
i
t
 
b
a
c
k
 
i
n
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
d
e
t
a
i
l
:
 
"
I
n
t
e
r
v
a
l
:
 
5
–
3
0
s
 
·
 
F
a
i
l
u
r
e
s
 
b
e
f
o
r
e
 
e
v
i
c
t
i
o
n
:
 
u
s
u
a
l
l
y
 
2
–
3
 
·
 
K
e
e
p
 
t
h
e
 
L
B
 
e
n
d
p
o
i
n
t
 
s
h
a
l
l
o
w
 
-
 
j
u
s
t
 
&
l
d
q
u
o
;
i
s
 
t
h
i
s
 
p
r
o
c
e
s
s
 
a
l
i
v
e
?
&
r
d
q
u
o
;
 
D
e
e
p
 
c
h
e
c
k
s
 
t
h
a
t
 
p
i
n
g
 
t
h
e
 
D
B
/
c
a
c
h
e
 
c
a
n
 
c
a
s
c
a
d
e
-
e
v
i
c
t
 
y
o
u
r
 
w
h
o
l
e
 
f
l
e
e
t
 
d
u
r
i
n
g
 
a
 
d
e
p
e
n
d
e
n
c
y
 
b
l
i
p
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
<
S
h
a
r
e
2
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
8
b
5
c
f
6
"
,


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
S
t
i
c
k
y
 
s
e
s
s
i
o
n
s
 
(
s
e
s
s
i
o
n
 
a
f
f
i
n
i
t
y
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
d
y
:
 
"
N
o
r
m
a
l
l
y
 
t
h
e
 
L
B
 
m
a
y
 
r
o
u
t
e
 
y
o
u
 
t
o
 
a
n
y
 
b
a
c
k
e
n
d
.
 
B
u
t
 
i
f
 
t
h
a
t
 
b
a
c
k
e
n
d
 
h
o
l
d
s
 
s
e
s
s
i
o
n
 
s
t
a
t
e
 
i
n
 
m
e
m
o
r
y
,
 
y
o
u
 
M
U
S
T
 
h
i
t
 
t
h
e
 
s
a
m
e
 
b
o
x
 
e
v
e
r
y
 
t
i
m
e
 
-
 
e
l
s
e
 
y
o
u
 
a
p
p
e
a
r
 
l
o
g
g
e
d
-
o
u
t
.
 
S
t
i
c
k
y
 
s
e
s
s
i
o
n
s
 
p
i
n
 
a
 
c
l
i
e
n
t
 
(
b
y
 
c
o
o
k
i
e
 
o
r
 
I
P
 
h
a
s
h
)
 
t
o
 
o
n
e
 
b
a
c
k
e
n
d
.
 
U
s
e
 
i
t
 
a
s
 
a
 
l
a
s
t
 
r
e
s
o
r
t
 
-
 
e
x
t
e
r
n
a
l
i
z
i
n
g
 
s
t
a
t
e
 
i
s
 
b
e
t
t
e
r
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
d
e
t
a
i
l
:
 
"
C
o
o
k
i
e
-
b
a
s
e
d
 
i
s
 
s
a
f
e
r
 
t
h
a
n
 
I
P
-
b
a
s
e
d
 
(
p
r
o
x
i
e
s
,
 
N
A
T
 
m
a
k
e
 
I
P
s
 
u
n
r
e
l
i
a
b
l
e
)
.
 
B
r
e
a
k
s
 
c
l
e
a
n
l
y
 
w
h
e
n
 
a
 
b
o
x
 
d
i
e
s
 
-
 
u
s
e
r
 
l
o
s
e
s
 
s
e
s
s
i
o
n
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
<
A
c
t
i
v
i
t
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
w
-
5
 
h
-
5
"
 
/
>
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
1
0
b
9
8
1
"
,


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
T
L
S
 
t
e
r
m
i
n
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
d
y
:
 
"
H
T
T
P
S
 
d
e
c
r
y
p
t
i
o
n
 
i
s
 
C
P
U
-
h
e
a
v
y
.
 
D
o
i
n
g
 
i
t
 
o
n
 
e
v
e
r
y
 
b
a
c
k
e
n
d
 
i
s
 
w
a
s
t
e
f
u
l
.
 
I
n
s
t
e
a
d
,
 
t
h
e
 
L
B
 
t
e
r
m
i
n
a
t
e
s
 
T
L
S
 
-
 
i
t
 
h
o
l
d
s
 
t
h
e
 
c
e
r
t
,
 
d
e
c
r
y
p
t
s
 
o
n
c
e
,
 
t
h
e
n
 
f
o
r
w
a
r
d
s
 
p
l
a
i
n
 
H
T
T
P
 
t
o
 
b
a
c
k
e
n
d
s
 
i
n
s
i
d
e
 
t
h
e
 
p
r
i
v
a
t
e
 
n
e
t
w
o
r
k
.
 
B
a
c
k
e
n
d
s
 
s
t
a
y
 
s
i
m
p
l
e
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
d
e
t
a
i
l
:
 
"
T
h
i
s
 
i
s
 
w
h
y
 
A
L
B
s
,
 
N
g
i
n
x
,
 
a
n
d
 
C
l
o
u
d
f
l
a
r
e
 
s
i
t
 
i
n
 
f
r
o
n
t
 
o
f
 
a
l
m
o
s
t
 
e
v
e
r
y
 
p
r
o
d
u
c
t
i
o
n
 
a
p
p
.
 
C
e
r
t
 
r
o
t
a
t
i
o
n
 
h
a
p
p
e
n
s
 
i
n
 
o
n
e
 
p
l
a
c
e
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
f
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
f
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
4
4
p
x
 
1
f
r
"
,
 
g
a
p
:
 
1
4
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
f
.
c
o
l
o
r
}
`
,
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
f
.
c
o
l
o
r
}
1
0
`
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
3
6
,
 
h
e
i
g
h
t
:
 
3
6
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
a
c
k
g
r
o
u
n
d
:
 
f
.
c
o
l
o
r
,
 
c
o
l
o
r
:
 
"
#
f
f
f
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
.
i
c
o
n
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
.
t
i
t
l
e
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
.
b
o
d
y
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
6
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
p
a
d
d
i
n
g
:
 
"
6
p
x
 
1
0
p
x
"
,
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
)
"
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
.
d
e
t
a
i
l
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
d
i
v
>


 
 
 
 
 
 
 
 
)
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


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
8
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
,
 
b
a
c
k
g
r
o
u
n
d
:
 
S
D
_
S
O
F
T
,


 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
g
a
p
:
 
1
0
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
f
l
e
x
-
s
t
a
r
t
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
A
l
e
r
t
T
r
i
a
n
g
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
w
-
5
 
h
-
5
 
s
h
r
i
n
k
-
0
"
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
,
 
m
a
r
g
i
n
T
o
p
:
 
2
 
}
}
 
/
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
b
>
T
h
e
 
S
P
O
F
 
t
r
a
p
:
<
/
b
>
 
y
o
u
 
a
d
d
e
d
 
a
 
l
o
a
d
 
b
a
l
a
n
c
e
r
 
f
o
r
 
r
e
d
u
n
d
a
n
c
y
 
-
 
b
u
t
 
n
o
w
 
t
h
e
 
L
B
 
i
t
s
e
l
f
 
i
s


 
 
 
 
 
 
 
 
 
 
t
h
e
 
s
i
n
g
l
e
 
p
o
i
n
t
 
o
f
 
f
a
i
l
u
r
e
.
 
P
r
o
d
u
c
t
i
o
n
 
s
y
s
t
e
m
s
 
r
u
n
 
t
h
e
 
L
B
 
i
n
 
p
a
i
r
s
 
(
a
c
t
i
v
e
/
p
a
s
s
i
v
e
 
o
r


 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
/
a
c
t
i
v
e
)
 
w
i
t
h
 
s
h
a
r
e
d
 
I
P
s
.
 
C
l
o
u
d
 
L
B
s
 
(
A
L
B
,
 
G
C
L
B
)
 
h
i
d
e
 
t
h
i
s
 
b
e
h
i
n
d
 
t
h
e
 
s
c
e
n
e
s
.


 
 
 
 
 
 
 
 
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
d
i
v
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
M
A
I
N
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
 
S
D
_
L
2
_
L
o
a
d
B
a
l
a
n
c
i
n
g
A
c
t
i
v
i
t
y
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
 
}
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
E
n
g
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
a
l
g
o
s
"
,
 
 
l
a
b
e
l
:
 
"
A
l
g
o
r
i
t
h
m
s
"
,
 
i
c
o
n
:
 
<
S
h
u
f
f
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
A
l
g
o
r
i
t
h
m
L
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
l
a
y
e
r
"
,
 
 
l
a
b
e
l
:
 
"
L
4
 
v
s
 
L
7
"
,
 
i
c
o
n
:
 
<
S
h
a
r
e
2
 
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
,
 
c
o
n
t
e
n
t
:
 
<
L
a
y
e
r
s
4
v
s
7
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
h
e
a
l
t
h
"
,
 
l
a
b
e
l
:
 
"
H
e
a
l
t
h
 
&
 
E
s
s
e
n
t
i
a
l
s
"
,
 
i
c
o
n
:
 
<
H
e
a
r
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
,
 
c
o
n
t
e
n
t
:
 
<
E
s
s
e
n
t
i
a
l
s
 
/
>
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
E
n
g
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
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
 
"
Y
o
u
 
h
a
v
e
 
4
 
i
d
e
n
t
i
c
a
l
 
b
a
c
k
e
n
d
 
s
e
r
v
e
r
s
.
 
W
h
i
c
h
 
a
l
g
o
r
i
t
h
m
 
i
s
 
s
i
m
p
l
e
s
t
 
a
n
d
 
f
a
i
r
 
u
n
d
e
r
 
s
t
e
a
d
y
 
t
r
a
f
f
i
c
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
I
P
 
H
a
s
h
"
,
 
"
R
o
u
n
d
 
R
o
b
i
n
"
,
 
"
W
e
i
g
h
t
e
d
"
,
 
"
R
a
n
d
o
m
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
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
 
"
R
o
u
n
d
 
R
o
b
i
n
 
r
o
t
a
t
e
s
 
t
h
r
o
u
g
h
 
t
h
e
m
 
e
v
e
n
l
y
.
 
I
t
 
o
n
l
y
 
b
r
e
a
k
s
 
d
o
w
n
 
w
h
e
n
 
s
e
r
v
e
r
s
 
h
a
v
e
 
d
i
f
f
e
r
e
n
t
 
c
a
p
a
c
i
t
y
 
O
R
 
r
e
q
u
e
s
t
 
d
u
r
a
t
i
o
n
s
 
v
a
r
y
 
a
 
l
o
t
 
-
 
t
h
e
n
 
L
e
a
s
t
 
C
o
n
n
e
c
t
i
o
n
s
 
o
r
 
W
e
i
g
h
t
e
d
 
w
i
n
s
.
"
,


 
 
 
 
}
,


 
 
 
 
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
 
"
Y
o
u
r
 
b
a
c
k
e
n
d
s
 
h
a
v
e
 
i
n
-
m
e
m
o
r
y
 
s
e
s
s
i
o
n
 
d
a
t
a
.
 
W
h
i
c
h
 
a
l
g
o
r
i
t
h
m
 
k
e
e
p
s
 
a
 
u
s
e
r
 
h
i
t
t
i
n
g
 
t
h
e
 
s
a
m
e
 
s
e
r
v
e
r
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
R
o
u
n
d
 
R
o
b
i
n
"
,
 
"
L
e
a
s
t
 
C
o
n
n
e
c
t
i
o
n
s
"
,
 
"
I
P
 
H
a
s
h
 
(
o
r
 
c
o
o
k
i
e
-
b
a
s
e
d
 
s
t
i
c
k
y
)
"
,
 
"
R
a
n
d
o
m
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
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
 
"
I
P
 
H
a
s
h
 
d
e
t
e
r
m
i
n
i
s
t
i
c
a
l
l
y
 
m
a
p
s
 
c
l
i
e
n
t
 
→
 
s
e
r
v
e
r
.
 
C
o
o
k
i
e
-
b
a
s
e
d
 
s
t
i
c
k
y
 
i
s
 
b
e
t
t
e
r
 
(
I
P
s
 
a
r
e
 
u
n
r
e
l
i
a
b
l
e
 
b
e
h
i
n
d
 
N
A
T
/
p
r
o
x
i
e
s
)
,
 
b
u
t
 
b
o
t
h
 
a
c
h
i
e
v
e
 
a
f
f
i
n
i
t
y
.
"
,


 
 
 
 
}
,


 
 
 
 
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
 
"
A
 
L
a
y
e
r
 
7
 
l
o
a
d
 
b
a
l
a
n
c
e
r
 
c
a
n
 
d
o
 
s
o
m
e
t
h
i
n
g
 
a
 
L
a
y
e
r
 
4
 
o
n
e
 
c
a
n
n
o
t
.
 
W
h
a
t
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
H
a
n
d
l
e
 
T
C
P
 
t
r
a
f
f
i
c
"
,


 
 
 
 
 
 
 
 
"
R
o
u
t
e
 
r
e
q
u
e
s
t
s
 
b
a
s
e
d
 
o
n
 
U
R
L
 
p
a
t
h
 
o
r
 
H
T
T
P
 
h
e
a
d
e
r
s
"
,


 
 
 
 
 
 
 
 
"
F
o
r
w
a
r
d
 
p
a
c
k
e
t
s
"
,


 
 
 
 
 
 
 
 
"
L
i
s
t
e
n
 
o
n
 
p
o
r
t
 
8
0
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
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
 
"
L
4
 
o
n
l
y
 
s
e
e
s
 
I
P
s
 
a
n
d
 
p
o
r
t
s
.
 
L
7
 
t
e
r
m
i
n
a
t
e
s
 
T
C
P
,
 
p
a
r
s
e
s
 
H
T
T
P
,
 
a
n
d
 
c
a
n
 
r
o
u
t
e
 
/
a
p
i
/
*
 
t
o
 
o
n
e
 
p
o
o
l
 
a
n
d
 
/
s
t
a
t
i
c
/
*
 
t
o
 
a
n
o
t
h
e
r
.
"
,


 
 
 
 
}
,


 
 
 
 
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
 
"
W
h
a
t
 
i
s
 
t
h
e
 
p
u
r
p
o
s
e
 
o
f
 
a
 
h
e
a
l
t
h
 
c
h
e
c
k
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
M
e
a
s
u
r
e
 
u
s
e
r
 
h
a
p
p
i
n
e
s
s
"
,


 
 
 
 
 
 
 
 
"
T
e
s
t
 
t
h
e
 
L
B
'
s
 
o
w
n
 
C
P
U
"
,


 
 
 
 
 
 
 
 
"
P
e
r
i
o
d
i
c
a
l
l
y
 
v
e
r
i
f
y
 
e
a
c
h
 
b
a
c
k
e
n
d
 
i
s
 
a
l
i
v
e
;
 
t
a
k
e
 
u
n
h
e
a
l
t
h
y
 
o
n
e
s
 
o
u
t
 
o
f
 
r
o
t
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
"
C
h
e
c
k
 
S
S
L
 
c
e
r
t
i
f
i
c
a
t
e
 
e
x
p
i
r
y
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
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
 
"
H
e
a
l
t
h
 
c
h
e
c
k
s
 
(
e
.
g
.
,
 
G
E
T
 
/
h
e
a
l
t
h
z
 
e
v
e
r
y
 
5
s
)
 
l
e
t
 
t
h
e
 
L
B
 
r
o
u
t
e
 
a
w
a
y
 
f
r
o
m
 
d
e
a
d
 
b
a
c
k
e
n
d
s
 
a
u
t
o
m
a
t
i
c
a
l
l
y
.
 
T
h
i
s
 
i
s
 
t
h
e
 
m
e
c
h
a
n
i
s
m
 
b
e
h
i
n
d
 
z
e
r
o
-
d
o
w
n
t
i
m
e
 
d
e
p
l
o
y
s
.
"
,


 
 
 
 
}
,


 
 
 
 
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
 
"
Y
o
u
 
a
d
d
e
d
 
a
 
l
o
a
d
 
b
a
l
a
n
c
e
r
 
i
n
 
f
r
o
n
t
 
o
f
 
3
 
s
e
r
v
e
r
s
.
 
W
h
a
t
&
r
s
q
u
o
;
s
 
t
h
e
 
N
E
W
 
s
i
n
g
l
e
 
p
o
i
n
t
 
o
f
 
f
a
i
l
u
r
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
T
h
e
 
d
a
t
a
b
a
s
e
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
l
o
a
d
 
b
a
l
a
n
c
e
r
 
i
t
s
e
l
f
 
-
 
u
n
l
e
s
s
 
r
u
n
 
i
n
 
a
 
p
a
i
r
"
,


 
 
 
 
 
 
 
 
"
O
n
e
 
o
f
 
t
h
e
 
b
a
c
k
e
n
d
s
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
D
N
S
 
s
e
r
v
e
r
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
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
 
"
O
n
e
 
L
B
 
i
n
 
f
r
o
n
t
 
o
f
 
N
 
b
a
c
k
e
n
d
s
 
=
 
t
h
e
 
L
B
 
i
s
 
n
o
w
 
t
h
e
 
S
P
O
F
.
 
P
r
o
d
u
c
t
i
o
n
 
r
u
n
s
 
L
B
s
 
i
n
 
p
a
i
r
s
 
(
a
c
t
i
v
e
/
p
a
s
s
i
v
e
 
o
r
 
a
c
t
i
v
e
/
a
c
t
i
v
e
)
.
 
C
l
o
u
d
 
L
B
s
 
l
i
k
e
 
A
L
B
 
h
a
n
d
l
e
 
t
h
i
s
 
f
o
r
 
y
o
u
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
L
o
a
d
 
B
a
l
a
n
c
i
n
g
 
B
a
s
i
c
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
2
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
4
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
T
h
e
 
f
i
r
s
t
 
b
o
x
 
y
o
u
 
d
r
a
w
 
a
f
t
e
r
 
t
h
e
 
c
l
i
e
n
t
 
i
n
 
a
n
y
 
H
L
D
 
d
i
a
g
r
a
m
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}



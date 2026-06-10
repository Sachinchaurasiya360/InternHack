
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


 
 
C
o
m
p
a
s
s
,
 
F
i
l
e
S
t
a
c
k
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


 
 
C
l
o
u
d
,
 
C
h
e
v
r
o
n
R
i
g
h
t
,
 
C
h
e
v
r
o
n
L
e
f
t
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
 
A
n
i
m
a
t
e
d
 
D
N
S
 
r
e
s
o
l
u
t
i
o
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
o
p
 
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


 
 
s
u
b
:
 
s
t
r
i
n
g
;


 
 
s
i
d
e
:
 
"
l
e
f
t
"
 
|
 
"
r
i
g
h
t
"
;


 
 
x
:
 
n
u
m
b
e
r
;


 
 
y
:
 
n
u
m
b
e
r
;


}




c
o
n
s
t
 
H
O
P
S
:
 
H
o
p
[
]
 
=
 
[


 
 
{
 
i
d
:
 
"
c
l
i
e
n
t
"
,
 
 
l
a
b
e
l
:
 
"
Y
o
u
r
 
B
r
o
w
s
e
r
"
,
 
 
 
 
 
 
 
 
 
 
s
u
b
:
 
"
y
o
u
t
u
b
e
.
c
o
m
?
"
,
 
 
 
 
 
 
 
 
 
 
 
 
s
i
d
e
:
 
"
l
e
f
t
"
,
 
 
x
:
 
6
0
,
 
 
y
:
 
4
0
 
}
,


 
 
{
 
i
d
:
 
"
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
O
S
 
/
 
B
r
o
w
s
e
r
 
C
a
c
h
e
"
,
 
 
 
 
s
u
b
:
 
"
c
h
e
c
k
s
 
l
o
c
a
l
 
c
a
c
h
e
"
,
 
 
 
 
 
 
s
i
d
e
:
 
"
l
e
f
t
"
,
 
 
x
:
 
6
0
,
 
 
y
:
 
1
2
0
 
}
,


 
 
{
 
i
d
:
 
"
r
e
s
o
l
v
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
R
e
c
u
r
s
i
v
e
 
R
e
s
o
l
v
e
r
"
,
 
 
 
 
s
u
b
:
 
"
I
S
P
 
/
 
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
 
1
.
1
.
1
.
1
"
,
 
s
i
d
e
:
 
"
l
e
f
t
"
,
 
 
x
:
 
6
0
,
 
 
y
:
 
2
0
0
 
}
,


 
 
{
 
i
d
:
 
"
r
o
o
t
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
o
t
 
S
e
r
v
e
r
s
"
,
 
 
 
 
 
 
 
 
 
 
s
u
b
:
 
"
1
3
 
c
l
u
s
t
e
r
s
 
w
o
r
l
d
w
i
d
e
"
,
 
 
 
s
i
d
e
:
 
"
r
i
g
h
t
"
,
 
x
:
 
5
6
0
,
 
y
:
 
4
0
 
}
,


 
 
{
 
i
d
:
 
"
t
l
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
.
c
o
m
 
T
L
D
 
S
e
r
v
e
r
s
"
,
 
 
 
 
 
 
s
u
b
:
 
"
k
n
o
w
s
 
a
l
l
 
.
c
o
m
 
d
o
m
a
i
n
s
"
,
 
 
s
i
d
e
:
 
"
r
i
g
h
t
"
,
 
x
:
 
5
6
0
,
 
y
:
 
1
2
0
 
}
,


 
 
{
 
i
d
:
 
"
a
u
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
A
u
t
h
o
r
i
t
a
t
i
v
e
 
S
e
r
v
e
r
"
,
 
 
s
u
b
:
 
"
y
o
u
t
u
b
e
.
c
o
m
'
s
 
o
w
n
 
D
N
S
"
,
 
 
 
s
i
d
e
:
 
"
r
i
g
h
t
"
,
 
x
:
 
5
6
0
,
 
y
:
 
2
0
0
 
}
,


]
;




c
o
n
s
t
 
S
T
E
P
S
 
=
 
[


 
 
{
 
f
r
o
m
:
 
"
c
l
i
e
n
t
"
,
 
 
 
t
o
:
 
"
r
e
s
o
l
v
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
W
h
a
t
'
s
 
t
h
e
 
I
P
 
f
o
r
 
y
o
u
t
u
b
e
.
c
o
m
?
"
,
 
n
o
t
e
:
 
"
C
h
e
c
k
 
O
S
 
c
a
c
h
e
 
-
 
m
i
s
s
.
"
 
}
,


 
 
{
 
f
r
o
m
:
 
"
r
e
s
o
l
v
e
r
"
,
 
t
o
:
 
"
r
o
o
t
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
h
o
 
k
n
o
w
s
 
.
c
o
m
?
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
o
t
e
:
 
"
"
 
}
,


 
 
{
 
f
r
o
m
:
 
"
r
o
o
t
"
,
 
 
 
 
 
t
o
:
 
"
r
e
s
o
l
v
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
A
s
k
 
t
h
e
s
e
 
.
c
o
m
 
T
L
D
 
s
e
r
v
e
r
s
 
→
"
,
 
 
n
o
t
e
:
 
"
"
 
}
,


 
 
{
 
f
r
o
m
:
 
"
r
e
s
o
l
v
e
r
"
,
 
t
o
:
 
"
t
l
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
h
o
 
k
n
o
w
s
 
y
o
u
t
u
b
e
.
c
o
m
?
"
,
 
 
 
 
 
 
 
 
 
n
o
t
e
:
 
"
"
 
}
,


 
 
{
 
f
r
o
m
:
 
"
t
l
d
"
,
 
 
 
 
 
 
t
o
:
 
"
r
e
s
o
l
v
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
A
s
k
 
y
o
u
t
u
b
e
.
c
o
m
'
s
 
a
u
t
h
 
s
e
r
v
e
r
 
→
"
,
 
n
o
t
e
:
 
"
"
 
}
,


 
 
{
 
f
r
o
m
:
 
"
r
e
s
o
l
v
e
r
"
,
 
t
o
:
 
"
a
u
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
W
h
a
t
'
s
 
t
h
e
 
I
P
 
f
o
r
 
y
o
u
t
u
b
e
.
c
o
m
?
"
,
 
n
o
t
e
:
 
"
"
 
}
,


 
 
{
 
f
r
o
m
:
 
"
a
u
t
h
"
,
 
 
 
 
 
t
o
:
 
"
r
e
s
o
l
v
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
1
4
2
.
2
5
0
.
1
9
0
.
4
6
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
o
t
e
:
 
"
R
e
s
o
l
v
e
r
 
c
a
c
h
e
s
 
t
h
i
s
 
p
e
r
 
T
T
L
.
"
 
}
,


 
 
{
 
f
r
o
m
:
 
"
r
e
s
o
l
v
e
r
"
,
 
t
o
:
 
"
c
l
i
e
n
t
"
,
 
 
 
l
a
b
e
l
:
 
"
1
4
2
.
2
5
0
.
1
9
0
.
4
6
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
o
t
e
:
 
"
B
r
o
w
s
e
r
 
c
a
c
h
e
s
 
t
o
o
.
 
N
o
w
 
o
p
e
n
 
T
C
P
.
"
 
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
 
D
N
S
A
n
i
m
a
t
i
o
n
(
)
 
{


 
 
c
o
n
s
t
 
[
s
t
e
p
,
 
s
e
t
S
t
e
p
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
-
1
)
;
 
 
 
/
/
 
-
1
 
=
 
i
d
l
e
,
 
0
.
.
S
T
E
P
S
.
l
e
n
g
t
h
-
1
 
=
 
a
c
t
i
v
e
 
s
t
e
p


 
 
c
o
n
s
t
 
[
p
l
a
y
i
n
g
,
 
s
e
t
P
l
a
y
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
p
l
a
y
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


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
i
f
 
(
s
t
e
p
 
>
=
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
)
 
{
 
s
e
t
P
l
a
y
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
 
r
e
t
u
r
n
;
 
}


 
 
 
 
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
 
s
e
t
S
t
e
p
(
(
s
)
 
=
>
 
s
 
+
 
1
)
,
 
1
7
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
T
i
m
e
o
u
t
(
t
)
;


 
 
}
,
 
[
p
l
a
y
i
n
g
,
 
s
t
e
p
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
 
g
e
t
H
o
p
(
i
d
:
 
s
t
r
i
n
g
)
 
{
 
r
e
t
u
r
n
 
H
O
P
S
.
f
i
n
d
(
(
h
)
 
=
>
 
h
.
i
d
 
=
=
=
 
i
d
)
!
;
 
}




 
 
c
o
n
s
t
 
c
u
r
r
e
n
t
 
=
 
s
t
e
p
 
>
=
 
0
 
?
 
S
T
E
P
S
[
s
t
e
p
]
 
:
 
n
u
l
l
;


 
 
c
o
n
s
t
 
c
u
r
r
e
n
t
F
r
o
m
 
=
 
c
u
r
r
e
n
t
 
?
 
g
e
t
H
o
p
(
c
u
r
r
e
n
t
.
f
r
o
m
)
 
:
 
n
u
l
l
;


 
 
c
o
n
s
t
 
c
u
r
r
e
n
t
T
o
 
 
 
=
 
c
u
r
r
e
n
t
 
?
 
g
e
t
H
o
p
(
c
u
r
r
e
n
t
.
t
o
)
 
 
 
:
 
n
u
l
l
;




 
 
f
u
n
c
t
i
o
n
 
a
d
v
a
n
c
e
(
d
i
r
:
 
1
 
|
 
-
1
)
 
{


 
 
 
 
s
e
t
P
l
a
y
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
t
e
p
(
(
s
)
 
=
>
 
M
a
t
h
.
m
a
x
(
-
1
,
 
M
a
t
h
.
m
i
n
(
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
,
 
s
 
+
 
d
i
r
)
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
W
h
a
t
 
h
a
p
p
e
n
s
 
b
e
t
w
e
e
n
 
y
o
u
 
t
y
p
i
n
g
 
a
 
U
R
L
 
a
n
d
 
s
e
e
i
n
g
 
t
h
e
 
p
a
g
e
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


 
 
 
 
 
 
 
 
B
e
f
o
r
e
 
a
 
s
i
n
g
l
e
 
b
y
t
e
 
o
f
 
H
T
M
L
 
c
o
m
e
s
 
b
a
c
k
,
 
t
h
e
 
b
r
o
w
s
e
r
 
h
a
s
 
t
o
 
c
o
n
v
e
r
t


 
 
 
 
 
 
 
 
<
c
o
d
e
 
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
 
}
}
>
 
y
o
u
t
u
b
e
.
c
o
m
<
/
c
o
d
e
>
 
i
n
t
o
 
a
n
 
I
P
 
a
d
d
r
e
s
s
.
 
T
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
 
D
N
S
.


 
 
 
 
 
 
 
 
I
t
 
f
e
e
l
s
 
i
n
s
t
a
n
t
 
b
e
c
a
u
s
e
 
e
v
e
r
y
 
h
o
p
 
c
a
c
h
e
s
 
h
e
a
v
i
l
y
 
-
 
b
u
t
 
t
h
e
r
e
 
a
r
e
 
a
l
w
a
y
s
 
3
 
s
e
r
v
e
r
s


 
 
 
 
 
 
 
 
p
o
t
e
n
t
i
a
l
l
y
 
i
n
v
o
l
v
e
d
:
 
r
o
o
t
 
→
 
T
L
D
 
→
 
a
u
t
h
o
r
i
t
a
t
i
v
e
.


 
 
 
 
 
 
<
/
p
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
,
 
f
l
e
x
W
r
a
p
:
 
"
w
r
a
p
"
 
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
 
{
 
i
f
 
(
s
t
e
p
 
>
=
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
)
 
s
e
t
S
t
e
p
(
-
1
)
;
 
s
e
t
P
l
a
y
i
n
g
(
t
r
u
e
)
;
 
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
 
s
e
t
S
t
e
p
(
(
s
)
 
=
>
 
(
s
 
<
 
0
 
?
 
0
 
:
 
s
)
)
,
 
3
0
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
 
p
l
a
y
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
 
p
l
a
y
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
p
l
a
y
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
p
l
a
y
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
 
s
t
e
p
 
>
=
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
 
?
 
"
R
e
p
l
a
y
"
 
:
 
"
P
l
a
y
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
(
)
 
=
>
 
a
d
v
a
n
c
e
(
-
1
)
}


 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
s
t
e
p
 
<
=
 
-
1
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
8
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
 
s
t
e
p
 
<
=
 
-
1
 
?
 
"
n
o
t
-
a
l
l
o
w
e
d
"
 
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
 
o
p
a
c
i
t
y
:
 
s
t
e
p
 
<
=
 
-
1
 
?
 
0
.
4
 
:
 
1
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
L
e
f
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
 
P
r
e
v


 
 
 
 
 
 
 
 
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
(
)
 
=
>
 
a
d
v
a
n
c
e
(
1
)
}


 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
s
t
e
p
 
>
=
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
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
8
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
 
s
t
e
p
 
>
=
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
 
?
 
"
n
o
t
-
a
l
l
o
w
e
d
"
 
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
 
o
p
a
c
i
t
y
:
 
s
t
e
p
 
>
=
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
 
?
 
0
.
4
 
:
 
1
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
N
e
x
t
 
<
C
h
e
v
r
o
n
R
i
g
h
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
(
)
 
=
>
 
{
 
s
e
t
S
t
e
p
(
-
1
)
;
 
s
e
t
P
l
a
y
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
 
m
a
r
g
i
n
L
e
f
t
:
 
"
a
u
t
o
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


 
 
 
 
 
 
 
 
 
 
S
t
e
p
 
{
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
t
e
p
 
+
 
1
)
}
 
/
 
{
S
T
E
P
S
.
l
e
n
g
t
h
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
t
e
p
 
r
a
i
l
 
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
 
g
a
p
:
 
4
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
l
e
x
W
r
a
p
:
 
"
w
r
a
p
"
 
}
}
>


 
 
 
 
 
 
 
 
{
S
T
E
P
S
.
m
a
p
(
(
_
,
 
i
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
 
i
 
=
=
=
 
s
t
e
p
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
o
n
e
 
=
 
i
 
<
 
s
t
e
p
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
i
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
 
s
e
t
P
l
a
y
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
t
e
p
(
i
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
4
p
x
 
9
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
a
c
t
i
v
e
 
?
 
S
D
 
:
 
d
o
n
e
 
?
 
`
$
{
S
D
}
5
5
`
 
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
o
r
d
e
r
)
"
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
 
a
c
t
i
v
e
 
?
 
S
D
 
:
 
d
o
n
e
 
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
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
a
c
t
i
v
e
 
?
 
"
#
f
f
f
"
 
:
 
d
o
n
e
 
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
4
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
 
+
 
1
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
 
p
a
d
d
i
n
g
:
 
2
0
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
s
v
g
 
v
i
e
w
B
o
x
=
"
0
 
0
 
7
0
0
 
2
7
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
 
w
i
d
t
h
:
 
"
1
0
0
%
"
,
 
h
e
i
g
h
t
:
 
2
9
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
d
e
f
s
>


 
 
 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
d
n
s
A
r
r
D
o
n
e
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
8
"
 
r
e
f
X
=
"
7
"
 
r
e
f
Y
=
"
4
"
 
o
r
i
e
n
t
=
"
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
8
,
4
 
L
0
,
8
 
z
"
 
f
i
l
l
=
{
S
D
}
 
f
i
l
l
O
p
a
c
i
t
y
=
"
0
.
3
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
d
n
s
A
r
r
A
c
t
i
v
e
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
9
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
9
"
 
r
e
f
X
=
"
7
"
 
r
e
f
Y
=
"
4
.
5
"
 
o
r
i
e
n
t
=
"
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
9
,
4
.
5
 
L
0
,
9
 
z
"
 
f
i
l
l
=
{
S
D
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
 
 
<
/
d
e
f
s
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
e
r
s
i
s
t
e
n
t
 
t
r
a
i
l
 
-
 
a
l
l
 
c
o
m
p
l
e
t
e
d
 
s
t
e
p
s
 
a
s
 
f
a
i
n
t
 
a
r
r
o
w
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
S
T
E
P
S
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
 
>
=
 
s
t
e
p
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
 
=
 
g
e
t
H
o
p
(
s
.
f
r
o
m
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
 
=
 
g
e
t
H
o
p
(
s
.
t
o
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
x
 
=
 
f
.
s
i
d
e
 
=
=
=
 
"
l
e
f
t
"
 
?
 
f
.
x
 
+
 
1
4
0
 
:
 
f
.
x
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
y
 
=
 
f
.
y
 
+
 
2
8
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
x
 
=
 
t
.
s
i
d
e
 
=
=
=
 
"
l
e
f
t
"
 
?
 
t
.
x
 
+
 
1
4
0
 
:
 
t
.
x
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
y
 
=
 
t
.
y
 
+
 
2
8
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
k
e
y
=
{
`
t
r
a
i
l
$
{
i
}
`
}
 
x
1
=
{
f
x
}
 
y
1
=
{
f
y
}
 
x
2
=
{
t
x
}
 
y
2
=
{
t
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
S
D
}
 
s
t
r
o
k
e
O
p
a
c
i
t
y
=
{
0
.
1
8
}
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
3
,
4
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
d
n
s
A
r
r
D
o
n
e
)
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
H
o
p
 
b
o
x
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
H
O
P
S
.
m
a
p
(
(
h
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
o
u
c
h
e
d
 
=
 
s
t
e
p
 
>
=
 
0
 
&
&
 
S
T
E
P
S
.
s
l
i
c
e
(
0
,
 
s
t
e
p
 
+
 
1
)
.
s
o
m
e
(
(
s
)
 
=
>
 
s
.
f
r
o
m
 
=
=
=
 
h
.
i
d
 
|
|
 
s
.
t
o
 
=
=
=
 
h
.
i
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
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
 
c
u
r
r
e
n
t
 
&
&
 
(
c
u
r
r
e
n
t
.
f
r
o
m
 
=
=
=
 
h
.
i
d
 
|
|
 
c
u
r
r
e
n
t
.
t
o
 
=
=
=
 
h
.
i
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
R
e
s
o
l
v
e
r
 
g
e
t
s
 
a
 
"
c
a
c
h
e
d
"
 
b
a
d
g
e
 
a
f
t
e
r
 
s
t
e
p
 
6
 
(
a
u
t
h
 
r
e
t
u
r
n
s
 
I
P
 
a
t
 
s
t
e
p
 
6
;
 
r
e
s
o
l
v
e
r
 
c
a
c
h
e
s
)


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
a
c
h
e
d
 
=
 
h
.
i
d
 
=
=
=
 
"
r
e
s
o
l
v
e
r
"
 
&
&
 
s
t
e
p
 
>
=
 
6
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
C
a
c
h
e
d
 
=
 
h
.
i
d
 
=
=
=
 
"
o
s
"
 
&
&
 
s
t
e
p
 
>
=
 
7
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
h
.
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
h
.
x
}
 
y
=
{
h
.
y
}
 
w
i
d
t
h
=
"
1
4
0
"
 
h
e
i
g
h
t
=
"
5
6
"
 
r
x
=
"
8
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
a
c
t
i
v
e
 
?
 
`
$
{
S
D
}
2
2
`
 
:
 
t
o
u
c
h
e
d
 
?
 
`
$
{
S
D
}
0
c
`
 
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
a
c
t
i
v
e
 
?
 
S
D
 
:
 
t
o
u
c
h
e
d
 
?
 
`
$
{
S
D
}
6
6
`
 
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
o
r
d
e
r
)
"
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
a
c
t
i
v
e
 
?
 
2
 
:
 
1
.
5
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
h
.
x
 
+
 
7
0
}
 
y
=
{
h
.
y
 
+
 
2
4
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
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
=
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
 
f
o
n
t
S
i
z
e
=
"
1
2
"
 
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
=
"
7
0
0
"
 
f
i
l
l
=
{
a
c
t
i
v
e
 
?
 
S
D
 
:
 
t
o
u
c
h
e
d
 
?
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
h
.
x
 
+
 
7
0
}
 
y
=
{
h
.
y
 
+
 
4
2
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
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
=
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
 
f
o
n
t
S
i
z
e
=
"
1
0
"
 
f
i
l
l
=
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
.
s
u
b
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
c
a
c
h
e
d
 
|
|
 
c
l
i
e
n
t
C
a
c
h
e
d
)
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
g
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
h
.
x
 
+
 
9
2
}
 
y
=
{
h
.
y
 
-
 
9
}
 
w
i
d
t
h
=
"
4
6
"
 
h
e
i
g
h
t
=
"
1
8
"
 
r
x
=
"
9
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
#
1
0
b
9
8
1
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
h
.
x
 
+
 
1
1
5
}
 
y
=
{
h
.
y
 
+
 
4
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
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
=
{
M
O
N
O
}
 
f
o
n
t
S
i
z
e
=
"
9
"
 
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
=
"
8
0
0
"
 
f
i
l
l
=
"
#
f
f
f
"
 
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
=
"
0
.
0
8
e
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
A
C
H
E
D


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
c
t
i
v
e
 
a
r
r
o
w
 
+
 
f
l
y
i
n
g
 
p
a
c
k
e
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
 
&
&
 
c
u
r
r
e
n
t
F
r
o
m
 
&
&
 
c
u
r
r
e
n
t
T
o
 
&
&
 
(
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
o
w
a
r
d
S
i
d
e
 
=
 
c
u
r
r
e
n
t
T
o
.
s
i
d
e
 
=
=
=
 
c
u
r
r
e
n
t
F
r
o
m
.
s
i
d
e
 
?
 
c
u
r
r
e
n
t
F
r
o
m
.
s
i
d
e
 
:
 
"
r
i
g
h
t
"
;


 
 
 
 
 
 
 
 
 
 
 
 
v
o
i
d
 
t
o
w
a
r
d
S
i
d
e
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
x
 
=
 
c
u
r
r
e
n
t
F
r
o
m
.
s
i
d
e
 
=
=
=
 
"
l
e
f
t
"
 
?
 
c
u
r
r
e
n
t
F
r
o
m
.
x
 
+
 
1
4
0
 
:
 
c
u
r
r
e
n
t
F
r
o
m
.
x
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
y
 
=
 
c
u
r
r
e
n
t
F
r
o
m
.
y
 
+
 
2
8
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
x
 
=
 
c
u
r
r
e
n
t
T
o
.
s
i
d
e
 
=
=
=
 
"
l
e
f
t
"
 
?
 
c
u
r
r
e
n
t
T
o
.
x
 
+
 
1
4
0
 
:
 
c
u
r
r
e
n
t
T
o
.
x
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
y
 
=
 
c
u
r
r
e
n
t
T
o
.
y
 
+
 
2
8
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
n
s
w
e
r
 
=
 
c
u
r
r
e
n
t
.
f
r
o
m
 
=
=
=
 
"
a
u
t
h
"
 
|
|
 
(
c
u
r
r
e
n
t
.
f
r
o
m
 
=
=
=
 
"
r
e
s
o
l
v
e
r
"
 
&
&
 
c
u
r
r
e
n
t
.
t
o
 
=
=
=
 
"
c
l
i
e
n
t
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
l
o
r
 
=
 
i
s
A
n
s
w
e
r
 
?
 
"
#
1
0
b
9
8
1
"
 
:
 
S
D
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
g
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
f
x
}
 
y
1
=
{
f
y
}
 
x
2
=
{
t
x
}
 
y
2
=
{
t
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
c
o
l
o
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
"
2
.
2
5
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
d
n
s
A
r
r
A
c
t
i
v
e
)
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
a
c
k
e
t
 
b
o
x
 
f
l
y
i
n
g
 
a
l
o
n
g
 
t
h
e
 
l
i
n
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
g
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
n
i
m
a
t
e
M
o
t
i
o
n
 
d
u
r
=
"
1
.
2
s
"
 
f
i
l
l
=
"
f
r
e
e
z
e
"
 
p
a
t
h
=
{
`
M
 
$
{
f
x
}
 
$
{
f
y
}
 
L
 
$
{
t
x
}
 
$
{
t
y
}
`
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
"
-
3
4
"
 
y
=
"
-
9
"
 
w
i
d
t
h
=
"
6
8
"
 
h
e
i
g
h
t
=
"
1
8
"
 
r
x
=
"
4
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
#
f
f
f
"
 
s
t
r
o
k
e
=
{
c
o
l
o
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
0
"
 
y
=
"
4
"
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
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
=
{
M
O
N
O
}
 
f
o
n
t
S
i
z
e
=
"
9
"
 
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
=
"
8
0
0
"
 
f
i
l
l
=
{
c
o
l
o
r
}
 
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
=
"
0
.
0
4
e
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
A
n
s
w
e
r
 
?
 
"
I
P
 
→
"
 
:
 
"
?
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
(
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
D
i
v
i
d
e
r
 
l
a
b
e
l
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
3
5
0
"
 
y
=
"
1
5
"
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
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
=
{
M
O
N
O
}
 
f
o
n
t
S
i
z
e
=
"
1
0
"
 
f
i
l
l
=
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
=
"
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
C
L
I
E
N
T
 
S
I
D
E
 
 
←
→
 
 
D
N
S
 
H
I
E
R
A
R
C
H
Y


 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
<
/
s
v
g
>




 
 
 
 
 
 
 
 
{
/
*
 
C
a
p
t
i
o
n
 
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
 
1
2
,
 
m
i
n
H
e
i
g
h
t
:
 
5
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
 
S
D
_
S
O
F
T
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
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
 
S
D
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
T
E
P
 
{
s
t
e
p
 
+
 
1
}
 
·
 
{
c
u
r
r
e
n
t
.
f
r
o
m
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
}
 
→
 
{
c
u
r
r
e
n
t
.
t
o
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
 
c
u
r
r
e
n
t
.
n
o
t
e
 
?
 
3
 
:
 
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
.
n
o
t
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
c
u
r
r
e
n
t
.
n
o
t
e
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
H
i
t
 
<
e
m
>
P
l
a
y
<
/
e
m
>
 
t
o
 
w
a
t
c
h
 
a
 
r
e
c
u
r
s
i
v
e
 
D
N
S
 
l
o
o
k
u
p
 
u
n
f
o
l
d
,
 
o
r
 
u
s
e
 
<
e
m
>
N
e
x
t
<
/
e
m
>
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
 
m
a
n
u
a
l
l
y
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
 
R
e
c
u
r
s
i
v
e
 
v
s
 
I
t
e
r
a
t
i
v
e
 
+
 
C
a
c
h
i
n
g
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
C
a
c
h
i
n
g
(
)
 
{


 
 
c
o
n
s
t
 
t
i
e
r
s
 
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
B
r
o
w
s
e
r
 
c
a
c
h
e
"
,
 
 
 
 
 
t
t
l
:
 
"
s
e
c
o
n
d
s
–
m
i
n
u
t
e
s
"
,
 
h
i
t
:
 
9
0
,
 
n
o
t
e
:
 
"
H
i
t
 
o
n
 
e
v
e
r
y
 
r
e
p
e
a
t
 
p
a
g
e
v
i
e
w
.
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
O
S
 
s
t
u
b
 
c
a
c
h
e
"
,
 
 
 
 
 
t
t
l
:
 
"
m
i
n
u
t
e
s
"
,
 
 
 
 
 
 
 
 
 
 
h
i
t
:
 
7
0
,
 
n
o
t
e
:
 
"
S
h
a
r
e
d
 
a
c
r
o
s
s
 
a
l
l
 
a
p
p
s
 
o
n
 
y
o
u
r
 
m
a
c
h
i
n
e
.
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
s
o
l
v
e
r
 
c
a
c
h
e
"
,
 
 
 
 
t
t
l
:
 
"
T
T
L
 
o
n
 
r
e
c
o
r
d
 
(
u
s
u
a
l
l
y
 
5
 
m
i
n
–
2
4
h
)
"
,
 
h
i
t
:
 
4
0
,
 
n
o
t
e
:
 
"
S
h
a
r
e
d
 
b
y
 
m
i
l
l
i
o
n
s
 
o
f
 
u
s
e
r
s
 
o
f
 
t
h
a
t
 
I
S
P
.
 
R
o
o
t
 
N
S
 
+
 
T
L
D
 
r
e
f
e
r
r
a
l
s
 
a
r
e
 
k
e
p
t
 
h
e
r
e
 
l
o
n
g
-
t
e
r
m
 
t
o
o
,
 
s
o
 
m
o
s
t
 
l
o
o
k
u
p
s
 
n
e
v
e
r
 
l
e
a
v
e
 
t
h
i
s
 
b
o
x
.
"
 
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
D
N
S
 
w
o
u
l
d
 
b
e
 
u
n
b
e
a
r
a
b
l
y
 
s
l
o
w
 
w
i
t
h
o
u
t
 
c
a
c
h
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
 
f
u
l
l
 
l
o
o
k
u
p
 
t
a
k
e
s
 
~
6
 
r
o
u
n
d
 
t
r
i
p
s
.
 
T
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
 
h
u
n
d
r
e
d
s
 
o
f
 
m
i
l
l
i
s
e
c
o
n
d
s
.
 
D
N
S
 
f
i
x
e
s
 
t
h
i
s


 
 
 
 
 
 
 
 
w
i
t
h
 
<
b
>
3
 
l
a
y
e
r
s
 
o
f
 
c
a
c
h
i
n
g
<
/
b
>
 
-
 
b
r
o
w
s
e
r
,
 
O
S
 
s
t
u
b
,
 
a
n
d
 
t
h
e
 
r
e
c
u
r
s
i
v
e
 
r
e
s
o
l
v
e
r
.
 
M
o
s
t


 
 
 
 
 
 
 
 
l
o
o
k
u
p
s
 
s
t
o
p
 
a
t
 
t
h
e
 
f
i
r
s
t
 
o
r
 
s
e
c
o
n
d
 
l
a
y
e
r
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
{
/
*
 
C
a
c
h
e
 
t
i
e
r
s
 
b
a
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
 
b
o
r
d
e
r
B
o
t
t
o
m
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
 
S
D
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


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
C
A
C
H
E
 
H
I
E
R
A
R
C
H
Y
 
·
 
H
I
T
 
R
A
T
E
 
T
Y
P
I
C
A
L


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
{
t
i
e
r
s
.
m
a
p
(
(
t
,
 
i
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
t
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
2
0
0
p
x
 
1
3
0
p
x
 
1
f
r
 
1
1
0
p
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
i
 
<
 
t
i
e
r
s
.
l
e
n
g
t
h
 
-
 
1
 
?
 
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
 
:
 
"
n
o
n
e
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
 
i
 
%
 
2
 
=
=
=
 
0
 
?
 
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
 
}
}
>
{
t
.
l
a
b
e
l
}
<
/
s
p
a
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
{
t
.
t
t
l
}
<
/
s
p
a
n
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
 
4
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
t
.
h
i
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
 
S
D
 
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
t
.
h
i
t
}
%
 
h
i
t
<
/
s
p
a
n
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
 
g
r
i
d
C
o
l
u
m
n
:
 
"
1
 
/
 
-
1
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
 
-
4
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
 
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
.
n
o
t
e
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




 
 
 
 
 
 
{
/
*
 
R
e
c
u
r
s
i
v
e
 
v
s
 
I
t
e
r
a
t
i
v
e
 
*
/
}


 
 
 
 
 
 
<
h
4
 
s
t
y
l
e
=
{
{
 
.
.
.
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
r
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
 
1
0
 
}
}
>
R
e
c
u
r
s
i
v
e
 
v
s
 
i
t
e
r
a
t
i
v
e
 
q
u
e
r
i
e
s
<
/
h
4
>


 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
R
e
c
u
r
s
i
v
e
 
q
u
e
r
y
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


 
 
 
 
 
 
 
 
 
 
 
 
w
h
o
:
 
"
C
l
i
e
n
t
 
→
 
R
e
s
o
l
v
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
d
e
s
c
:
 
"
C
l
i
e
n
t
 
a
s
k
s
 
t
h
e
 
r
e
s
o
l
v
e
r
 
o
n
e
 
q
u
e
s
t
i
o
n
 
a
n
d
 
e
x
p
e
c
t
s
 
t
h
e
 
f
i
n
a
l
 
a
n
s
w
e
r
.
 
T
h
e
 
r
e
s
o
l
v
e
r
 
d
o
e
s
 
a
l
l
 
t
h
e
 
w
o
r
k
 
c
h
a
s
i
n
g
 
t
h
e
 
h
i
e
r
a
r
c
h
y
 
o
n
 
t
h
e
 
c
l
i
e
n
t
&
r
s
q
u
o
;
s
 
b
e
h
a
l
f
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
e
x
a
m
p
l
e
:
 
"
Y
o
u
r
 
l
a
p
t
o
p
 
→
 
1
.
1
.
1
.
1
 
→
 
\
"
t
e
l
l
 
m
e
 
t
h
e
 
I
P
\
"
 
→
 
a
n
s
w
e
r
 
r
e
t
u
r
n
e
d
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
I
t
e
r
a
t
i
v
e
 
q
u
e
r
y
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
0
6
b
6
d
4
"
,


 
 
 
 
 
 
 
 
 
 
 
 
w
h
o
:
 
"
R
e
s
o
l
v
e
r
 
→
 
R
o
o
t
 
/
 
T
L
D
 
/
 
A
u
t
h
"
,


 
 
 
 
 
 
 
 
 
 
 
 
d
e
s
c
:
 
"
R
e
s
o
l
v
e
r
 
a
s
k
s
 
r
o
o
t
,
 
T
L
D
,
 
a
n
d
 
a
u
t
h
o
r
i
t
a
t
i
v
e
 
s
e
r
v
e
r
s
 
o
n
e
 
a
t
 
a
 
t
i
m
e
.
 
E
a
c
h
 
r
e
t
u
r
n
s
 
a
 
r
e
f
e
r
r
a
l
 
(
&
l
d
q
u
o
;
t
r
y
 
t
h
i
s
 
s
e
r
v
e
r
 
n
e
x
t
&
r
d
q
u
o
;
)
,
 
n
o
t
 
t
h
e
 
f
i
n
a
l
 
a
n
s
w
e
r
 
-
 
u
n
t
i
l
 
t
h
e
 
a
u
t
h
 
r
e
p
l
i
e
s
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
e
x
a
m
p
l
e
:
 
"
R
e
s
o
l
v
e
r
 
→
 
r
o
o
t
 
→
 
T
L
D
 
→
 
a
u
t
h
 
→
 
I
P
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
c
.
t
i
t
l
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
t
i
t
l
e
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
 
6
 
}
}
>
{
c
.
w
h
o
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
 
8
 
}
}
>
{
c
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
 
}
}
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
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
3
 
-
 
R
e
c
o
r
d
 
t
y
p
e
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




i
n
t
e
r
f
a
c
e
 
D
N
S
R
e
c
o
r
d
 
{


 
 
t
y
p
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


 
 
m
a
p
s
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
a
m
p
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


 
 
n
o
t
e
:
 
s
t
r
i
n
g
;


}




c
o
n
s
t
 
R
E
C
O
R
D
S
:
 
D
N
S
R
e
c
o
r
d
[
]
 
=
 
[


 
 
{
 
t
y
p
e
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
 
S
D
,
 
 
 
 
 
 
 
 
m
a
p
s
:
 
"
n
a
m
e
 
→
 
I
P
v
4
 
a
d
d
r
e
s
s
"
,
 
 
 
 
 
 
 
 
e
x
a
m
p
l
e
:
 
"
y
o
u
t
u
b
e
.
c
o
m
.
 
 
 
 
 
A
 
 
 
 
 
1
4
2
.
2
5
0
.
1
9
0
.
4
6
"
,
 
 
n
o
t
e
:
 
"
T
h
e
 
w
o
r
k
h
o
r
s
e
.
 
M
o
s
t
 
l
o
o
k
u
p
s
 
e
n
d
 
h
e
r
e
.
"
 
}
,


 
 
{
 
t
y
p
e
:
 
"
A
A
A
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
f
5
9
e
0
b
"
,
 
m
a
p
s
:
 
"
n
a
m
e
 
→
 
I
P
v
6
 
a
d
d
r
e
s
s
"
,
 
 
 
 
 
 
 
 
e
x
a
m
p
l
e
:
 
"
y
o
u
t
u
b
e
.
c
o
m
.
 
 
 
 
 
A
A
A
A
 
 
2
6
0
7
:
f
8
b
0
:
4
0
0
4
:
:
2
0
0
e
"
,
 
n
o
t
e
:
 
"
I
P
v
6
 
e
q
u
i
v
a
l
e
n
t
 
o
f
 
a
n
 
A
 
r
e
c
o
r
d
.
 
4
 
A
'
s
.
"
 
}
,


 
 
{
 
t
y
p
e
:
 
"
C
N
A
M
E
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
 
m
a
p
s
:
 
"
n
a
m
e
 
→
 
a
n
o
t
h
e
r
 
n
a
m
e
 
(
a
l
i
a
s
)
"
,
 
e
x
a
m
p
l
e
:
 
"
w
w
w
.
e
x
a
m
p
l
e
.
c
o
m
.
 
 
C
N
A
M
E
 
e
x
a
m
p
l
e
.
c
o
m
.
"
,
 
n
o
t
e
:
 
"
D
e
l
e
g
a
t
e
s
 
l
o
o
k
u
p
 
t
o
 
a
n
o
t
h
e
r
 
n
a
m
e
.
 
C
a
n
 
c
h
a
i
n
 
(
a
n
d
 
c
o
s
t
 
e
x
t
r
a
 
R
T
T
s
)
.
"
 
}
,


 
 
{
 
t
y
p
e
:
 
"
M
X
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
 
m
a
p
s
:
 
"
d
o
m
a
i
n
 
→
 
m
a
i
l
 
s
e
r
v
e
r
"
,
 
 
 
 
 
 
 
 
e
x
a
m
p
l
e
:
 
"
e
x
a
m
p
l
e
.
c
o
m
.
 
 
 
 
 
M
X
 
 
 
 
1
0
 
 
m
a
i
l
.
g
o
o
g
l
e
.
c
o
m
.
"
,
 
n
o
t
e
:
 
"
T
e
l
l
s
 
s
e
n
d
e
r
s
 
w
h
e
r
e
 
t
o
 
d
e
l
i
v
e
r
 
e
m
a
i
l
 
f
o
r
 
t
h
i
s
 
d
o
m
a
i
n
.
"
 
}
,


 
 
{
 
t
y
p
e
:
 
"
T
X
T
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
0
6
b
6
d
4
"
,
 
m
a
p
s
:
 
"
n
a
m
e
 
→
 
a
r
b
i
t
r
a
r
y
 
t
e
x
t
"
,
 
 
 
 
 
 
 
e
x
a
m
p
l
e
:
 
"
e
x
a
m
p
l
e
.
c
o
m
.
 
 
 
 
 
T
X
T
 
 
 
\
"
v
=
s
p
f
1
 
i
n
c
l
u
d
e
:
_
s
p
f
.
g
o
o
g
l
e
.
c
o
m
 
~
a
l
l
\
"
"
,
 
n
o
t
e
:
 
"
U
s
e
d
 
f
o
r
 
S
P
F
 
/
 
D
K
I
M
 
/
 
d
o
m
a
i
n
 
v
e
r
i
f
i
c
a
t
i
o
n
.
"
 
}
,


 
 
{
 
t
y
p
e
:
 
"
N
S
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
 
m
a
p
s
:
 
"
d
o
m
a
i
n
 
→
 
a
u
t
h
o
r
i
t
a
t
i
v
e
 
n
a
m
e
s
e
r
v
e
r
s
"
,
 
e
x
a
m
p
l
e
:
 
"
e
x
a
m
p
l
e
.
c
o
m
.
 
 
 
 
 
N
S
 
 
 
 
n
s
1
.
c
l
o
u
d
f
l
a
r
e
.
c
o
m
.
"
,
 
n
o
t
e
:
 
"
D
e
l
e
g
a
t
e
s
 
a
 
z
o
n
e
 
t
o
 
o
t
h
e
r
 
s
e
r
v
e
r
s
.
"
 
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
 
R
e
c
o
r
d
s
(
)
 
{


 
 
c
o
n
s
t
 
[
p
i
c
k
e
d
,
 
s
e
t
P
i
c
k
e
d
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
"
A
"
)
;


 
 
c
o
n
s
t
 
r
 
=
 
R
E
C
O
R
D
S
.
f
i
n
d
(
(
x
)
 
=
>
 
x
.
t
y
p
e
 
=
=
=
 
p
i
c
k
e
d
)
!
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
D
N
S
 
s
t
o
r
e
s
 
m
o
r
e
 
t
h
a
n
 
j
u
s
t
 
I
P
s
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
 
D
N
S
 
z
o
n
e
 
i
s
 
a
 
t
i
n
y
 
d
a
t
a
b
a
s
e
 
o
f
 
<
b
>
r
e
c
o
r
d
s
<
/
b
>
.
 
E
a
c
h
 
r
e
c
o
r
d
 
t
y
p
e
 
a
n
s
w
e
r
s
 
a
 
d
i
f
f
e
r
e
n
t


 
 
 
 
 
 
 
 
q
u
e
s
t
i
o
n
.
 
I
n
t
e
r
v
i
e
w
e
r
s
 
c
o
m
m
o
n
l
y
 
a
s
k
 
a
b
o
u
t
 
A
,
 
C
N
A
M
E
,
 
a
n
d
 
M
X
 
-
 
t
h
e
 
o
t
h
e
r
 
t
h
r
e
e
 
a
r
e
 
e
x
t
r
a


 
 
 
 
 
 
 
 
c
r
e
d
i
t
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
r
e
p
e
a
t
(
6
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
6
 
}
}
>


 
 
 
 
 
 
 
 
{
R
E
C
O
R
D
S
.
m
a
p
(
(
r
e
c
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
 
r
e
c
.
t
y
p
e
 
=
=
=
 
p
i
c
k
e
d
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
r
e
c
.
t
y
p
e
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
P
i
c
k
e
d
(
r
e
c
.
t
y
p
e
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
r
e
c
.
c
o
l
o
r
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
 
`
$
{
r
e
c
.
c
o
l
o
r
}
1
5
`
 
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
 
M
O
N
O
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
 
o
n
 
?
 
r
e
c
.
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
c
.
t
y
p
e
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


 
 
 
 
 
 
 
 
k
e
y
=
{
r
.
t
y
p
e
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
e
n
g
-
f
a
d
e
I
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
r
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
r
.
c
o
l
o
r
}
0
f
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
b
a
s
e
l
i
n
e
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
 
8
 
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
1
.
3
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
 
r
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
r
.
t
y
p
e
}
<
/
s
p
a
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
S
i
z
e
:
 
"
0
.
9
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
 
}
}
>
{
r
.
m
a
p
s
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
8
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
1
0
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
r
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
,
 
o
v
e
r
f
l
o
w
X
:
 
"
a
u
t
o
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
r
.
e
x
a
m
p
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
r
.
n
o
t
e
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
 
1
8
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
 
S
D
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


 
 
 
 
 
 
 
 
 
 
I
N
T
E
R
V
I
E
W
 
Q
U
E
S
T
I
O
N
 
Y
O
U
 
W
I
L
L
 
G
E
T


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
&
l
d
q
u
o
;
Y
o
u
 
a
d
d
 
a
 
<
c
o
d
e
 
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
 
}
}
>
C
N
A
M
E
<
/
c
o
d
e
>
 
f
o
r


 
 
 
 
 
 
 
 
 
 
<
c
o
d
e
 
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
 
}
}
>
 
w
w
w
.
e
x
a
m
p
l
e
.
c
o
m
<
/
c
o
d
e
>
 
p
o
i
n
t
i
n
g
 
a
t


 
 
 
 
 
 
 
 
 
 
<
c
o
d
e
 
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
.
c
o
m
<
/
c
o
d
e
>
.
 
W
h
y
 
c
o
u
l
d
 
t
h
i
s
 
a
d
d
 
l
a
t
e
n
c
y
?
&
r
d
q
u
o
;


 
 
 
 
 
 
 
 
 
 
A
n
s
w
e
r
:
 
e
v
e
r
y
 
r
e
s
o
l
v
e
r
 
h
a
s
 
t
o
 
d
o
 
a
 
<
e
m
>
s
e
c
o
n
d
<
/
e
m
>
 
D
N
S
 
l
o
o
k
u
p
 
t
o
 
f
o
l
l
o
w
 
t
h
e
 
a
l
i
a
s
.
 
T
h
e


 
 
 
 
 
 
 
 
 
 
t
r
i
c
k
 
i
s
 
t
h
a
t
 
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
 
c
a
c
h
e
d
,
 
s
o
 
t
h
e
 
c
o
s
t
 
o
n
l
y
 
h
i
t
s
 
c
o
l
d
 
c
l
i
e
n
t
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
D
N
S
J
o
u
r
n
e
y
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
j
o
u
r
n
e
y
"
,
 
l
a
b
e
l
:
 
"
T
h
e
 
J
o
u
r
n
e
y
"
,
 
i
c
o
n
:
 
<
C
o
m
p
a
s
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
D
N
S
A
n
i
m
a
t
i
o
n
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
c
a
c
h
e
"
,
 
 
 
l
a
b
e
l
:
 
"
C
a
c
h
i
n
g
 
&
 
T
y
p
e
s
"
,
 
i
c
o
n
:
 
<
C
l
o
u
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
C
a
c
h
i
n
g
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
r
e
c
o
r
d
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
R
e
c
o
r
d
 
T
y
p
e
s
"
,
 
i
c
o
n
:
 
<
F
i
l
e
S
t
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
R
e
c
o
r
d
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
W
h
a
t
 
d
o
e
s
 
D
N
S
 
a
c
t
u
a
l
l
y
 
c
o
n
v
e
r
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
s
 
i
n
t
o
 
T
C
P
 
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
D
o
m
a
i
n
 
n
a
m
e
s
 
(
y
o
u
t
u
b
e
.
c
o
m
)
 
i
n
t
o
 
I
P
 
a
d
d
r
e
s
s
e
s
 
(
1
4
2
.
2
5
0
.
1
9
0
.
4
6
)
"
,


 
 
 
 
 
 
 
 
"
I
P
s
 
i
n
t
o
 
M
A
C
 
a
d
d
r
e
s
s
e
s
"
,


 
 
 
 
 
 
 
 
"
H
T
T
P
S
 
i
n
t
o
 
H
T
T
P
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
D
N
S
 
=
 
D
o
m
a
i
n
 
N
a
m
e
 
S
y
s
t
e
m
.
 
I
t
s
 
j
o
b
 
i
s
 
n
a
m
e
 
→
 
I
P
 
r
e
s
o
l
u
t
i
o
n
 
s
o
 
m
a
c
h
i
n
e
s
 
c
a
n
 
a
c
t
u
a
l
l
y
 
r
o
u
t
e
 
t
o
 
e
a
c
h
 
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
i
c
h
 
c
a
c
h
e
 
l
a
y
e
r
 
u
s
u
a
l
l
y
 
w
i
n
s
 
t
h
e
 
l
o
o
k
u
p
 
a
n
d
 
p
r
e
v
e
n
t
s
 
a
n
y
 
n
e
t
w
o
r
k
 
t
r
a
f
f
i
c
 
a
t
 
a
l
l
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
o
t
 
s
e
r
v
e
r
"
,
 
"
B
r
o
w
s
e
r
 
/
 
O
S
 
c
a
c
h
e
"
,
 
"
T
L
D
 
s
e
r
v
e
r
"
,
 
"
A
u
t
h
o
r
i
t
a
t
i
v
e
 
s
e
r
v
e
r
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
B
r
o
w
s
e
r
 
+
 
O
S
 
c
a
c
h
e
s
 
s
a
t
i
s
f
y
 
t
h
e
 
v
a
s
t
 
m
a
j
o
r
i
t
y
 
o
f
 
r
e
p
e
a
t
 
l
o
o
k
u
p
s
 
w
i
t
h
o
u
t
 
a
n
y
 
D
N
S
 
p
a
c
k
e
t
s
 
l
e
a
v
i
n
g
 
y
o
u
r
 
m
a
c
h
i
n
e
.
 
T
h
a
t
'
s
 
w
h
y
 
r
e
p
e
a
t
 
v
i
s
i
t
s
 
f
e
e
l
 
i
n
s
t
a
n
t
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
 
r
e
c
o
r
d
&
r
s
q
u
o
;
s
 
T
T
L
 
i
s
 
3
0
0
 
s
e
c
o
n
d
s
.
 
W
h
a
t
 
d
o
e
s
 
t
h
a
t
 
m
e
a
n
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
 
r
e
c
o
r
d
 
e
x
p
i
r
e
s
 
p
e
r
m
a
n
e
n
t
l
y
 
a
f
t
e
r
 
5
 
m
i
n
u
t
e
s
.
"
,


 
 
 
 
 
 
 
 
"
R
e
s
o
l
v
e
r
s
 
m
a
y
 
c
a
c
h
e
 
t
h
i
s
 
r
e
c
o
r
d
 
f
o
r
 
u
p
 
t
o
 
5
 
m
i
n
u
t
e
s
 
b
e
f
o
r
e
 
r
e
-
c
h
e
c
k
i
n
g
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
s
e
r
v
e
r
 
w
i
l
l
 
b
e
 
d
o
w
n
 
f
o
r
 
5
 
m
i
n
u
t
e
s
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
d
o
m
a
i
n
 
i
s
 
v
a
l
i
d
 
f
o
r
 
5
 
m
i
n
u
t
e
s
.
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
T
T
L
 
(
t
i
m
e
-
t
o
-
l
i
v
e
)
 
c
o
n
t
r
o
l
s
 
h
o
w
 
l
o
n
g
 
a
 
r
e
s
o
l
v
e
r
 
i
s
 
a
l
l
o
w
e
d
 
t
o
 
c
a
c
h
e
 
t
h
e
 
r
e
c
o
r
d
.
 
L
o
w
 
T
T
L
 
=
 
f
a
s
t
e
r
 
p
r
o
p
a
g
a
t
i
o
n
 
w
h
e
n
 
y
o
u
 
c
h
a
n
g
e
 
I
P
s
,
 
b
u
t
 
m
o
r
e
 
D
N
S
 
t
r
a
f
f
i
c
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
i
c
h
 
r
e
c
o
r
d
 
t
y
p
e
 
m
a
p
s
 
o
n
e
 
n
a
m
e
 
t
o
 
a
n
o
t
h
e
r
 
(
a
n
 
a
l
i
a
s
)
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
A
"
,
 
"
M
X
"
,
 
"
C
N
A
M
E
"
,
 
"
T
X
T
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
C
N
A
M
E
 
=
 
C
a
n
o
n
i
c
a
l
 
N
a
m
e
.
 
I
t
 
t
e
l
l
s
 
r
e
s
o
l
v
e
r
s
 
'
t
o
 
l
o
o
k
 
u
p
 
X
,
 
l
o
o
k
 
u
p
 
Y
 
f
i
r
s
t
.
'
 
U
s
e
f
u
l
 
f
o
r
 
p
o
i
n
t
i
n
g
 
s
u
b
d
o
m
a
i
n
s
 
a
t
 
e
x
t
e
r
n
a
l
 
s
e
r
v
i
c
e
s
 
(
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
,
 
V
e
r
c
e
l
,
 
e
t
c
.
)
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
I
n
 
a
 
r
e
c
u
r
s
i
v
e
 
D
N
S
 
q
u
e
r
y
,
 
w
h
o
 
d
o
e
s
 
t
h
e
 
h
e
a
v
y
 
l
i
f
t
i
n
g
 
o
f
 
c
h
a
s
i
n
g
 
t
h
e
 
h
i
e
r
a
r
c
h
y
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
 
r
o
o
t
 
s
e
r
v
e
r
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
a
u
t
h
o
r
i
t
a
t
i
v
e
 
s
e
r
v
e
r
 
f
o
r
 
t
h
e
 
d
o
m
a
i
n
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
r
e
s
o
l
v
e
r
 
(
e
.
g
.
,
 
y
o
u
r
 
I
S
P
 
o
r
 
1
.
1
.
1
.
1
)
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
b
r
o
w
s
e
r
 
i
t
s
e
l
f
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
T
h
e
 
r
e
s
o
l
v
e
r
 
t
a
k
e
s
 
t
h
e
 
c
l
i
e
n
t
'
s
 
s
i
n
g
l
e
 
q
u
e
s
t
i
o
n
 
a
n
d
 
r
e
c
u
r
s
i
v
e
l
y
 
a
s
k
s
 
r
o
o
t
 
→
 
T
L
D
 
→
 
a
u
t
h
o
r
i
t
a
t
i
v
e
 
u
n
t
i
l
 
i
t
 
h
a
s
 
t
h
e
 
a
n
s
w
e
r
.
 
T
h
e
 
c
l
i
e
n
t
 
o
n
l
y
 
s
e
e
s
 
o
n
e
 
q
u
e
r
y
 
a
n
d
 
o
n
e
 
r
e
s
p
o
n
s
e
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
D
N
S
 
&
 
T
h
e
 
J
o
u
r
n
e
y
 
o
f
 
a
 
R
e
q
u
e
s
t
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
2
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
 
c
l
a
s
s
i
c
 
'
w
h
a
t
 
h
a
p
p
e
n
s
 
w
h
e
n
 
y
o
u
 
t
y
p
e
 
g
o
o
g
l
e
.
c
o
m
'
 
i
n
t
e
r
v
i
e
w
 
q
u
e
s
t
i
o
n
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



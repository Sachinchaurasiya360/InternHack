
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


 
 
N
e
t
w
o
r
k
,
 
S
e
n
d
,
 
I
n
b
o
x
,
 
C
o
d
e
2
,
 
F
i
l
e
T
e
x
t
,


 
 
C
h
e
c
k
,
 
X
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
a
t
o
m
y
 
o
f
 
a
 
r
e
q
u
e
s
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




/
*
 
S
t
a
g
e
s
:


 
 
 
0
 
=
 
i
d
l
e


 
 
 
1
 
=
 
r
e
q
u
e
s
t
 
f
l
y
i
n
g
 
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


 
 
 
2
 
=
 
s
e
r
v
e
r
 
p
r
o
c
e
s
s
i
n
g


 
 
 
3
 
=
 
r
e
s
p
o
n
s
e
 
f
l
y
i
n
g
 
s
e
r
v
e
r
→
c
l
i
e
n
t


 
 
 
4
 
=
 
d
o
n
e
 
(
c
l
i
e
n
t
 
r
e
n
d
e
r
e
d
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


c
o
n
s
t
 
A
N
A
T
O
M
Y
_
S
T
A
G
E
S
 
=
 
[


 
 
{
 
n
:
 
1
,
 
s
h
o
r
t
:
 
"
S
e
n
d
 
r
e
q
u
e
s
t
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
B
r
o
w
s
e
r
 
o
p
e
n
s
 
a
 
T
C
P
 
s
o
c
k
e
t
 
a
n
d
 
w
r
i
t
e
s
 
t
h
e
 
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
.
"
,
 
s
i
d
e
:
 
"
c
l
i
e
n
t
"
 
}
,


 
 
{
 
n
:
 
2
,
 
s
h
o
r
t
:
 
"
S
e
r
v
e
r
 
p
r
o
c
e
s
s
e
s
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
R
o
u
t
e
r
 
→
 
a
u
t
h
 
→
 
b
u
s
i
n
e
s
s
 
l
o
g
i
c
 
→
 
D
B
/
c
a
c
h
e
 
→
 
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
 
 
 
 
s
i
d
e
:
 
"
s
e
r
v
e
r
"
 
}
,


 
 
{
 
n
:
 
3
,
 
s
h
o
r
t
:
 
"
S
e
n
d
 
r
e
s
p
o
n
s
e
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
S
e
r
v
e
r
 
w
r
i
t
e
s
 
t
h
e
 
r
e
s
p
o
n
s
e
 
b
a
c
k
 
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
o
c
k
e
t
.
"
,
 
 
 
 
 
 
s
i
d
e
:
 
"
s
e
r
v
e
r
"
 
}
,


 
 
{
 
n
:
 
4
,
 
s
h
o
r
t
:
 
"
C
l
i
e
n
t
 
r
e
n
d
e
r
s
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
B
r
o
w
s
e
r
 
p
a
r
s
e
s
 
r
e
s
p
o
n
s
e
,
 
p
a
i
n
t
s
 
p
i
x
e
l
s
,
 
r
u
n
s
 
s
c
r
i
p
t
s
.
"
,
 
 
 
 
s
i
d
e
:
 
"
c
l
i
e
n
t
"
 
}
,


]
 
a
s
 
c
o
n
s
t
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
n
a
t
o
m
y
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
0
)
;
 
/
/
 
0
.
.
4




 
 
/
/
 
A
u
t
o
-
a
d
v
a
n
c
e
 
w
h
e
n
 
p
l
a
y
i
n
g


 
 
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
 
4
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
 
d
e
l
a
y
 
=
 
s
t
e
p
 
=
=
=
 
1
 
?
 
1
4
0
0
 
:
 
s
t
e
p
 
=
=
=
 
2
 
?
 
1
0
0
0
 
:
 
s
t
e
p
 
=
=
=
 
3
 
?
 
1
4
0
0
 
:
 
4
0
0
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
 
M
a
t
h
.
m
i
n
(
4
,
 
s
 
+
 
1
)
)
,
 
d
e
l
a
y
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
 
p
l
a
y
(
)
 
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
 
4
)
 
s
e
t
S
t
e
p
(
0
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
 
1
 
?
 
1
 
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
0
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
4
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
E
v
e
r
y
 
w
e
b
 
s
y
s
t
e
m
 
i
s
 
s
t
i
l
l
 
j
u
s
t
 
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
 
→
 
c
l
i
e
n
t
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
s
,
 
c
a
c
h
e
s
,
 
o
r
 
m
i
c
r
o
s
e
r
v
i
c
e
s
 
-
 
t
h
e
 
r
o
o
t
 
s
h
a
p
e
 
s
t
a
y
s
 
c
o
n
s
t
a
n
t
.
 
A
 
c
l
i
e
n
t


 
 
 
 
 
 
 
 
s
e
n
d
s
 
a
 
<
e
m
>
r
e
q
u
e
s
t
<
/
e
m
>
.
 
A
 
s
e
r
v
e
r
 
s
e
n
d
s
 
b
a
c
k
 
a
 
<
e
m
>
r
e
s
p
o
n
s
e
<
/
e
m
>
.
 
E
v
e
r
y
t
h
i
n
g
 
e
l
s
e
 
i
s
 
a
n


 
 
 
 
 
 
 
 
o
p
t
i
m
i
z
a
t
i
o
n
 
o
n
 
t
o
p
 
o
f
 
t
h
a
t
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
p
l
a
y
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
 
4
 
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
 
r
e
q
u
e
s
t
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
 
0
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
 
0
 
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
 
0
 
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
 
4
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
 
4
 
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
 
4
 
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
0
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
a
g
e
 
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
)
}
 
/
 
4


 
 
 
 
 
 
 
 
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
 
C
a
n
v
a
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


 
 
 
 
 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
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
 
"
2
6
p
x
 
2
0
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
4
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
4
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
r
e
q
A
r
r
o
w
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
r
e
s
p
A
r
r
o
w
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
 
C
l
i
e
n
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
"
3
0
"
 
y
=
"
8
0
"
 
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
8
0
"
 
r
x
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
{
s
t
e
p
 
=
=
=
 
0
 
?
 
"
#
6
3
6
6
f
1
1
5
"
 
:
 
s
t
e
p
 
=
=
=
 
4
 
?
 
"
#
6
3
6
6
f
1
3
0
"
 
:
 
"
#
6
3
6
6
f
1
2
0
"
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
"
#
6
3
6
6
f
1
"
 
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
s
t
e
p
 
=
=
=
 
0
 
|
|
 
s
t
e
p
 
=
=
=
 
4
 
?
 
2
.
2
 
:
 
2
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
"
1
0
0
"
 
y
=
"
1
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
4
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
"
#
6
3
6
6
f
1
"
>
C
L
I
E
N
T
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
"
1
0
0
"
 
y
=
"
1
3
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
1
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
b
r
o
w
s
e
r
 
/
 
a
p
p
<
/
t
e
x
t
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
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
"
5
3
0
"
 
y
=
"
8
0
"
 
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
8
0
"
 
r
x
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
{
s
t
e
p
 
=
=
=
 
2
 
?
 
`
$
{
S
D
}
3
0
`
 
:
 
`
$
{
S
D
}
1
5
`
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
W
i
d
t
h
=
{
s
t
e
p
 
=
=
=
 
2
 
?
 
2
.
5
 
:
 
2
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
"
6
0
0
"
 
y
=
"
1
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
4
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
S
D
}
>
S
E
R
V
E
R
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
"
6
0
0
"
 
y
=
"
1
3
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
1
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
a
p
p
 
+
 
d
a
t
a
b
a
s
e
<
/
t
e
x
t
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
e
q
u
e
s
t
 
c
h
a
n
n
e
l
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
"
1
7
5
"
 
y
1
=
"
1
0
5
"
 
x
2
=
"
5
2
5
"
 
y
2
=
"
1
0
5
"


 
 
 
 
 
 
 
 
 
 
 
 
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
W
i
d
t
h
=
"
2
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
4
,
4
"


 
 
 
 
 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
=
{
s
t
e
p
 
>
=
 
1
 
?
 
0
.
7
 
:
 
0
.
2
5
}


 
 
 
 
 
 
 
 
 
 
 
 
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
{
s
t
e
p
 
>
=
 
1
 
?
 
"
u
r
l
(
#
r
e
q
A
r
r
o
w
)
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
3
5
0
"
 
y
=
"
9
3
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
{
S
D
}
 
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
 
o
p
a
c
i
t
y
=
{
s
t
e
p
 
>
=
 
1
 
?
 
1
 
:
 
0
.
5
}
>


 
 
 
 
 
 
 
 
 
 
 
 
R
E
Q
U
E
S
T
 
 
→


 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
e
s
p
o
n
s
e
 
c
h
a
n
n
e
l
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
"
5
2
5
"
 
y
1
=
"
1
4
0
"
 
x
2
=
"
1
7
5
"
 
y
2
=
"
1
4
0
"


 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
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
4
,
4
"


 
 
 
 
 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
=
{
s
t
e
p
 
>
=
 
3
 
?
 
0
.
7
 
:
 
0
.
2
5
}


 
 
 
 
 
 
 
 
 
 
 
 
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
{
s
t
e
p
 
>
=
 
3
 
?
 
"
u
r
l
(
#
r
e
s
p
A
r
r
o
w
)
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
3
5
0
"
 
y
=
"
1
6
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
#
1
0
b
9
8
1
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
 
o
p
a
c
i
t
y
=
{
s
t
e
p
 
>
=
 
3
 
?
 
1
 
:
 
0
.
5
}
>


 
 
 
 
 
 
 
 
 
 
 
 
←
 
 
R
E
S
P
O
N
S
E


 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
F
l
y
i
n
g
 
R
E
Q
U
E
S
T
 
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
s
t
e
p
 
=
=
=
 
1
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
3
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
"
M
 
1
8
0
 
1
0
5
 
L
 
5
2
0
 
1
0
5
"
 
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
5
8
"
 
y
=
"
-
1
8
"
 
w
i
d
t
h
=
"
1
1
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
3
6
"
 
r
x
=
"
5
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
S
D
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
-
3
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
S
D
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
O
S
T
 
/
l
o
g
i
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
0
"
 
y
=
"
1
0
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
8
.
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
u
t
h
o
r
i
z
a
t
i
o
n
 
·
 
b
o
d
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
f
t
e
r
 
s
t
e
p
 
1
,
 
s
h
o
w
 
a
 
s
e
t
t
l
e
d
 
r
e
q
u
e
s
t
 
c
a
r
d
 
n
e
a
r
 
s
e
r
v
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
>
=
 
2
 
&
&
 
s
t
e
p
 
<
 
3
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
o
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
8
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
"
4
6
2
"
 
y
=
"
5
8
"
 
w
i
d
t
h
=
"
1
2
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
S
D
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
3
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
5
2
2
"
 
y
=
"
7
1
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
S
D
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
O
S
T
 
/
l
o
g
i
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
F
l
y
i
n
g
 
R
E
S
P
O
N
S
E
 
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
s
t
e
p
 
=
=
=
 
3
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
3
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
"
M
 
5
2
0
 
1
4
0
 
L
 
1
8
0
 
1
4
0
"
 
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
5
8
"
 
y
=
"
-
1
8
"
 
w
i
d
t
h
=
"
1
1
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
3
6
"
 
r
x
=
"
5
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
"
#
1
0
b
9
8
1
"
 
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
-
3
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
1
0
b
9
8
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2
0
0
 
O
K


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
0
"
 
y
=
"
1
0
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
8
.
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
e
t
-
C
o
o
k
i
e
 
·
 
J
S
O
N
 
b
o
d
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
f
t
e
r
 
s
t
e
p
 
3
,
 
s
e
t
t
l
e
d
 
r
e
s
p
o
n
s
e
 
c
a
r
d
 
n
e
a
r
 
c
l
i
e
n
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
>
=
 
4
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
o
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
8
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
"
1
1
8
"
 
y
=
"
1
6
8
"
 
w
i
d
t
h
=
"
1
0
4
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
"
#
1
0
b
9
8
1
"
 
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
3
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
1
7
0
"
 
y
=
"
1
8
1
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
"
#
1
0
b
9
8
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2
0
0
 
O
K


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
e
r
v
e
r
 
"
t
h
i
n
k
i
n
g
"
 
p
u
l
s
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
=
=
=
 
2
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
c
x
=
"
6
0
0
"
 
c
y
=
"
1
2
0
"
 
r
=
"
4
6
"
 
f
i
l
l
=
"
n
o
n
e
"
 
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
 
o
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
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
n
i
m
a
t
e
 
a
t
t
r
i
b
u
t
e
N
a
m
e
=
"
r
"
 
f
r
o
m
=
"
2
0
"
 
t
o
=
"
5
2
"
 
d
u
r
=
"
0
.
9
s
"
 
r
e
p
e
a
t
C
o
u
n
t
=
"
i
n
d
e
f
i
n
i
t
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
n
i
m
a
t
e
 
a
t
t
r
i
b
u
t
e
N
a
m
e
=
"
o
p
a
c
i
t
y
"
 
f
r
o
m
=
"
0
.
8
"
 
t
o
=
"
0
"
 
d
u
r
=
"
0
.
9
s
"
 
r
e
p
e
a
t
C
o
u
n
t
=
"
i
n
d
e
f
i
n
i
t
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
c
i
r
c
l
e
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
6
0
0
"
 
y
=
"
5
0
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
S
D
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
6
e
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
R
O
C
E
S
S
I
N
G
…


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
s
v
g
>




 
 
 
 
 
 
 
 
{
/
*
 
S
t
a
g
e
 
p
i
l
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
T
o
p
:
 
1
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
A
N
A
T
O
M
Y
_
S
T
A
G
E
S
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
 
o
n
 
=
 
s
t
e
p
 
>
=
 
s
.
n
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
 
s
t
e
p
 
=
=
=
 
s
.
n
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
s
.
n
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
s
.
n
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
o
r
d
e
r
:
 
a
c
t
i
v
e
 
?
 
`
2
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
2
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
n
}
.
 
{
s
.
s
h
o
r
t
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
 
c
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


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
s
t
e
p
 
>
 
0
 
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
A
G
E
 
{
s
t
e
p
}
 
·
 
{
A
N
A
T
O
M
Y
_
S
T
A
G
E
S
[
s
t
e
p
 
-
 
1
]
.
s
i
d
e
 
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
 
?
 
"
C
L
I
E
N
T
"
 
:
 
"
S
E
R
V
E
R
"
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
A
N
A
T
O
M
Y
_
S
T
A
G
E
S
[
s
t
e
p
 
-
 
1
]
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
 
f
u
l
l
 
r
o
u
n
d
-
t
r
i
p
,
 
o
r
 
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


 
 
 
 
 
 
 
 
 
 
T
H
E
 
P
R
O
T
O
C
O
L


 
 
 
 
 
 
 
 
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
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
T
h
e
 
l
a
n
g
u
a
g
e
 
b
o
t
h
 
s
i
d
e
s
 
s
p
e
a
k
 
i
s
 
<
b
>
H
T
T
P
<
/
b
>
 
(
H
y
p
e
r
T
e
x
t
 
T
r
a
n
s
f
e
r
 
P
r
o
t
o
c
o
l
)
.
 
A
 
r
e
q
u
e
s
t
 
h
a
s


 
 
 
 
 
 
 
 
 
 
a
 
<
b
>
m
e
t
h
o
d
<
/
b
>
 
(
G
E
T
/
P
O
S
T
)
,
 
a
 
<
b
>
p
a
t
h
<
/
b
>
 
(
/
l
o
g
i
n
)
,
 
<
b
>
h
e
a
d
e
r
s
<
/
b
>
,
 
a
n
d
 
a
n
 
o
p
t
i
o
n
a
l


 
 
 
 
 
 
 
 
 
 
<
b
>
 
b
o
d
y
<
/
b
>
.
 
A
 
r
e
s
p
o
n
s
e
 
h
a
s
 
a
 
<
b
>
s
t
a
t
u
s
 
c
o
d
e
<
/
b
>
 
(
2
0
0
,
 
4
0
4
…
)
,
 
<
b
>
h
e
a
d
e
r
s
<
/
b
>
,
 
a
n
d
 
a


 
 
 
 
 
 
 
 
 
 
<
b
>
 
b
o
d
y
<
/
b
>
.
 
S
a
m
e
 
f
o
u
r
 
p
a
r
t
s
,
 
e
v
e
r
y
 
t
i
m
e
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
 
 
T
A
B
 
2
 
-
 
M
e
t
h
o
d
s
 
+
 
S
t
a
t
u
s
 
c
o
d
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
 
H
T
T
P
M
e
t
h
o
d
 
{


 
 
n
a
m
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


 
 
s
a
f
e
:
 
b
o
o
l
e
a
n
;


 
 
i
d
e
m
:
 
b
o
o
l
e
a
n
;


 
 
b
o
d
y
:
 
b
o
o
l
e
a
n
;


 
 
u
s
e
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


}




c
o
n
s
t
 
M
E
T
H
O
D
S
:
 
H
T
T
P
M
e
t
h
o
d
[
]
 
=
 
[


 
 
{
 
n
a
m
e
:
 
"
G
E
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
1
0
b
9
8
1
"
,
 
s
a
f
e
:
 
t
r
u
e
,
 
 
i
d
e
m
:
 
t
r
u
e
,
 
 
b
o
d
y
:
 
f
a
l
s
e
,
 
u
s
e
:
 
"
F
e
t
c
h
 
d
a
t
a
.
 
N
e
v
e
r
 
m
o
d
i
f
i
e
s
 
s
e
r
v
e
r
 
s
t
a
t
e
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
G
E
T
 
/
u
s
e
r
s
/
4
2
 
 
→
 
r
e
t
u
r
n
s
 
u
s
e
r
 
4
2
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
P
O
S
T
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
 
 
 
 
 
 
 
 
s
a
f
e
:
 
f
a
l
s
e
,
 
i
d
e
m
:
 
f
a
l
s
e
,
 
b
o
d
y
:
 
t
r
u
e
,
 
 
u
s
e
:
 
"
C
r
e
a
t
e
 
a
 
r
e
s
o
u
r
c
e
 
o
r
 
t
r
i
g
g
e
r
 
a
n
 
a
c
t
i
o
n
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
P
O
S
T
 
/
o
r
d
e
r
s
 
 
 
→
 
c
r
e
a
t
e
s
 
a
 
n
e
w
 
o
r
d
e
r
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
P
U
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
f
5
9
e
0
b
"
,
 
s
a
f
e
:
 
f
a
l
s
e
,
 
i
d
e
m
:
 
t
r
u
e
,
 
 
b
o
d
y
:
 
t
r
u
e
,
 
 
u
s
e
:
 
"
R
e
p
l
a
c
e
 
a
 
r
e
s
o
u
r
c
e
 
e
n
t
i
r
e
l
y
 
a
t
 
a
 
k
n
o
w
n
 
U
R
L
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
P
U
T
 
/
u
s
e
r
s
/
4
2
 
 
→
 
r
e
p
l
a
c
e
s
 
u
s
e
r
 
4
2
 
f
u
l
l
y
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
P
A
T
C
H
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
9
7
3
1
6
"
,
 
s
a
f
e
:
 
f
a
l
s
e
,
 
i
d
e
m
:
 
f
a
l
s
e
,
 
b
o
d
y
:
 
t
r
u
e
,
 
 
u
s
e
:
 
"
A
p
p
l
y
 
a
 
p
a
r
t
i
a
l
 
u
p
d
a
t
e
 
t
o
 
a
 
r
e
s
o
u
r
c
e
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
P
A
T
C
H
 
/
u
s
e
r
s
/
4
2
 
→
 
u
p
d
a
t
e
s
 
o
n
l
y
 
t
h
e
 
e
m
a
i
l
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
D
E
L
E
T
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
8
4
c
c
1
6
"
,
 
s
a
f
e
:
 
f
a
l
s
e
,
 
i
d
e
m
:
 
t
r
u
e
,
 
 
b
o
d
y
:
 
f
a
l
s
e
,
 
u
s
e
:
 
"
R
e
m
o
v
e
 
a
 
r
e
s
o
u
r
c
e
.
 
C
a
l
l
i
n
g
 
i
t
 
t
w
i
c
e
 
=
 
s
t
i
l
l
 
d
e
l
e
t
e
d
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
D
E
L
E
T
E
 
/
u
s
e
r
s
/
4
2
 
→
 
r
e
m
o
v
e
s
 
u
s
e
r
 
4
2
"
 
}
,


]
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
t
a
t
u
s
B
a
n
d
 
{


 
 
r
a
n
g
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


 
 
n
a
m
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
s
:
 
{
 
c
o
d
e
:
 
n
u
m
b
e
r
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
 
m
e
a
n
i
n
g
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
;


}




c
o
n
s
t
 
S
T
A
T
U
S
:
 
S
t
a
t
u
s
B
a
n
d
[
]
 
=
 
[


 
 
{
 
r
a
n
g
e
:
 
"
1
x
x
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
4
7
4
8
b
"
,
 
n
a
m
e
:
 
"
I
n
f
o
r
m
a
t
i
o
n
a
l
"
,
 
c
o
d
e
s
:
 
[


 
 
 
 
{
 
c
o
d
e
:
 
1
0
0
,
 
l
a
b
e
l
:
 
"
C
o
n
t
i
n
u
e
"
,
 
m
e
a
n
i
n
g
:
 
"
K
e
e
p
 
s
e
n
d
i
n
g
,
 
I
'
m
 
r
e
a
d
y
.
"
 
}
,


 
 
]
}
,


 
 
{
 
r
a
n
g
e
:
 
"
2
x
x
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
 
n
a
m
e
:
 
"
S
u
c
c
e
s
s
"
,
 
c
o
d
e
s
:
 
[


 
 
 
 
{
 
c
o
d
e
:
 
2
0
0
,
 
l
a
b
e
l
:
 
"
O
K
"
,
 
m
e
a
n
i
n
g
:
 
"
I
t
 
w
o
r
k
e
d
.
 
B
o
d
y
 
h
a
s
 
y
o
u
r
 
a
n
s
w
e
r
.
"
 
}
,


 
 
 
 
{
 
c
o
d
e
:
 
2
0
1
,
 
l
a
b
e
l
:
 
"
C
r
e
a
t
e
d
"
,
 
m
e
a
n
i
n
g
:
 
"
I
 
m
a
d
e
 
a
 
n
e
w
 
r
e
s
o
u
r
c
e
 
f
o
r
 
y
o
u
.
"
 
}
,


 
 
 
 
{
 
c
o
d
e
:
 
2
0
4
,
 
l
a
b
e
l
:
 
"
N
o
 
C
o
n
t
e
n
t
"
,
 
m
e
a
n
i
n
g
:
 
"
I
t
 
w
o
r
k
e
d
 
b
u
t
 
t
h
e
r
e
'
s
 
n
o
 
b
o
d
y
.
"
 
}
,


 
 
]
}
,


 
 
{
 
r
a
n
g
e
:
 
"
3
x
x
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
 
n
a
m
e
:
 
"
R
e
d
i
r
e
c
t
i
o
n
"
,
 
c
o
d
e
s
:
 
[


 
 
 
 
{
 
c
o
d
e
:
 
3
0
1
,
 
l
a
b
e
l
:
 
"
M
o
v
e
d
 
P
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
"
,
 
m
e
a
n
i
n
g
:
 
"
U
s
e
 
t
h
i
s
 
n
e
w
 
U
R
L
 
f
r
o
m
 
n
o
w
 
o
n
.
"
 
}
,


 
 
 
 
{
 
c
o
d
e
:
 
3
0
2
,
 
l
a
b
e
l
:
 
"
F
o
u
n
d
"
,
 
m
e
a
n
i
n
g
:
 
"
T
e
m
p
o
r
a
r
y
 
r
e
d
i
r
e
c
t
.
"
 
}
,


 
 
 
 
{
 
c
o
d
e
:
 
3
0
4
,
 
l
a
b
e
l
:
 
"
N
o
t
 
M
o
d
i
f
i
e
d
"
,
 
m
e
a
n
i
n
g
:
 
"
Y
o
u
r
 
c
a
c
h
e
d
 
c
o
p
y
 
i
s
 
s
t
i
l
l
 
v
a
l
i
d
.
"
 
}
,


 
 
]
}
,


 
 
{
 
r
a
n
g
e
:
 
"
4
x
x
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
 
n
a
m
e
:
 
"
C
l
i
e
n
t
 
E
r
r
o
r
"
,
 
c
o
d
e
s
:
 
[


 
 
 
 
{
 
c
o
d
e
:
 
4
0
0
,
 
l
a
b
e
l
:
 
"
B
a
d
 
R
e
q
u
e
s
t
"
,
 
m
e
a
n
i
n
g
:
 
"
Y
o
u
r
 
r
e
q
u
e
s
t
 
i
s
 
m
a
l
f
o
r
m
e
d
.
"
 
}
,


 
 
 
 
{
 
c
o
d
e
:
 
4
0
1
,
 
l
a
b
e
l
:
 
"
U
n
a
u
t
h
o
r
i
z
e
d
"
,
 
m
e
a
n
i
n
g
:
 
"
W
h
o
 
a
r
e
 
y
o
u
?
 
L
o
g
 
i
n
 
f
i
r
s
t
.
"
 
}
,


 
 
 
 
{
 
c
o
d
e
:
 
4
0
3
,
 
l
a
b
e
l
:
 
"
F
o
r
b
i
d
d
e
n
"
,
 
m
e
a
n
i
n
g
:
 
"
I
 
k
n
o
w
 
y
o
u
 
-
 
s
t
i
l
l
 
n
o
 
a
c
c
e
s
s
.
"
 
}
,


 
 
 
 
{
 
c
o
d
e
:
 
4
0
4
,
 
l
a
b
e
l
:
 
"
N
o
t
 
F
o
u
n
d
"
,
 
m
e
a
n
i
n
g
:
 
"
T
h
a
t
 
p
a
t
h
 
d
o
e
s
n
'
t
 
e
x
i
s
t
.
"
 
}
,


 
 
 
 
{
 
c
o
d
e
:
 
4
2
9
,
 
l
a
b
e
l
:
 
"
T
o
o
 
M
a
n
y
 
R
e
q
u
e
s
t
s
"
,
 
m
e
a
n
i
n
g
:
 
"
S
l
o
w
 
d
o
w
n
 
-
 
y
o
u
 
h
i
t
 
t
h
e
 
r
a
t
e
 
l
i
m
i
t
.
"
 
}
,


 
 
]
}
,


 
 
{
 
r
a
n
g
e
:
 
"
5
x
x
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
 
n
a
m
e
:
 
"
S
e
r
v
e
r
 
E
r
r
o
r
"
,
 
c
o
d
e
s
:
 
[


 
 
 
 
{
 
c
o
d
e
:
 
5
0
0
,
 
l
a
b
e
l
:
 
"
I
n
t
e
r
n
a
l
 
S
e
r
v
e
r
 
E
r
r
o
r
"
,
 
m
e
a
n
i
n
g
:
 
"
S
e
r
v
e
r
 
c
r
a
s
h
e
d
.
 
M
y
 
b
a
d
.
"
 
}
,


 
 
 
 
{
 
c
o
d
e
:
 
5
0
2
,
 
l
a
b
e
l
:
 
"
B
a
d
 
G
a
t
e
w
a
y
"
,
 
m
e
a
n
i
n
g
:
 
"
U
p
s
t
r
e
a
m
 
s
e
r
v
i
c
e
 
g
a
v
e
 
m
e
 
g
a
r
b
a
g
e
.
"
 
}
,


 
 
 
 
{
 
c
o
d
e
:
 
5
0
3
,
 
l
a
b
e
l
:
 
"
S
e
r
v
i
c
e
 
U
n
a
v
a
i
l
a
b
l
e
"
,
 
m
e
a
n
i
n
g
:
 
"
S
e
r
v
e
r
 
i
s
 
o
v
e
r
l
o
a
d
e
d
 
o
r
 
d
o
w
n
.
"
 
}
,


 
 
 
 
{
 
c
o
d
e
:
 
5
0
4
,
 
l
a
b
e
l
:
 
"
G
a
t
e
w
a
y
 
T
i
m
e
o
u
t
"
,
 
m
e
a
n
i
n
g
:
 
"
U
p
s
t
r
e
a
m
 
t
o
o
k
 
t
o
o
 
l
o
n
g
 
t
o
 
r
e
s
p
o
n
d
.
"
 
}
,


 
 
]
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
 
M
e
t
h
o
d
s
A
n
d
S
t
a
t
u
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
<
s
t
r
i
n
g
>
(
"
G
E
T
"
)
;


 
 
c
o
n
s
t
 
m
 
=
 
M
E
T
H
O
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
n
a
m
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
 
?
?
 
M
E
T
H
O
D
S
[
0
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
M
e
t
h
o
d
s
 
t
e
l
l
 
t
h
e
 
s
e
r
v
e
r
 
<
e
m
>
w
h
a
t
<
/
e
m
>
.
 
S
t
a
t
u
s
 
c
o
d
e
s
 
t
e
l
l
 
t
h
e
 
c
l
i
e
n
t
 
<
e
m
>
h
o
w
 
i
t
 
w
e
n
t
<
/
e
m
>
.
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


 
 
 
 
 
 
 
 
M
e
t
h
o
d
 
=
 
v
e
r
b
.
 
S
t
a
t
u
s
 
c
o
d
e
 
=
 
o
u
t
c
o
m
e
.
 
S
e
n
i
o
r
 
e
n
g
i
n
e
e
r
s
 
k
n
o
w
 
t
h
e
 
5
 
c
o
r
e
 
m
e
t
h
o
d
s
 
c
o
l
d
 
a
n
d
 
c
a
n


 
 
 
 
 
 
 
 
c
i
t
e
 
t
h
e
 
c
o
m
m
o
n
 
s
t
a
t
u
s
 
c
o
d
e
s
 
w
i
t
h
o
u
t
 
G
o
o
g
l
i
n
g
.
 
S
t
a
r
t
 
h
e
r
e
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
{
/
*
 
M
e
t
h
o
d
s
 
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
5
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
M
E
T
H
O
D
S
.
m
a
p
(
(
m
e
t
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
 
o
n
 
=
 
m
e
t
h
.
n
a
m
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
m
o
t
i
o
n
.
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
m
e
t
h
.
n
a
m
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
m
e
t
h
.
n
a
m
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
m
e
t
h
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
m
e
t
h
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
 
m
e
t
h
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
b
o
r
d
e
r
-
c
o
l
o
r
 
1
8
0
m
s
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
 
1
8
0
m
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
e
t
h
.
n
a
m
e
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
m
.
n
a
m
e
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
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
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
 
o
p
a
c
i
t
y
:
 
1
,
 
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
3
0
0
,
 
d
a
m
p
i
n
g
:
 
2
6
 
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
m
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
m
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
0
 
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
 
m
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
m
.
n
a
m
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
 
}
}
>
{
m
.
u
s
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
2
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
m
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
2
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
m
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
6
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
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
a
f
e
 
(
n
o
 
s
t
a
t
e
 
c
h
a
n
g
e
)
"
,
 
o
n
:
 
m
.
s
a
f
e
 
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
I
d
e
m
p
o
t
e
n
t
 
(
s
a
m
e
 
r
e
s
u
l
t
 
o
n
 
r
e
p
e
a
t
)
"
,
 
o
n
:
 
m
.
i
d
e
m
 
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
H
a
s
 
b
o
d
y
"
,
 
o
n
:
 
m
.
b
o
d
y
 
}
,


 
 
 
 
 
 
 
 
 
 
]
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
p
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
o
n
 
?
 
<
C
h
e
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
#
1
0
b
9
8
1
"
 
}
}
 
/
>
 
:
 
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
4
 
h
-
4
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
 
"
#
f
9
7
3
1
6
"
 
}
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
p
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




 
 
 
 
 
 
{
/
*
 
S
t
a
t
u
s
 
t
a
b
l
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
S
t
a
t
u
s
 
c
o
d
e
 
l
a
d
d
e
r
<
/
h
4
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


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
S
T
A
T
U
S
.
m
a
p
(
(
b
a
n
d
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
b
a
n
d
.
r
a
n
g
e
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
b
a
n
d
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
p
x
 
s
o
l
i
d
 
$
{
b
a
n
d
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
 
b
a
n
d
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
b
a
n
d
.
r
a
n
g
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
 
}
}
>
{
b
a
n
d
.
n
a
m
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
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
b
a
n
d
.
c
o
d
e
s
.
m
a
p
(
(
c
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
c
.
c
o
d
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
7
0
p
x
 
1
8
0
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
8
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
 
b
a
n
d
.
c
o
d
e
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
 
b
a
n
d
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
S
i
z
e
:
 
"
0
.
9
r
e
m
"
 
}
}
>
{
c
.
c
o
d
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
{
c
.
m
e
a
n
i
n
g
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


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
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
 
R
e
a
l
 
r
e
q
u
e
s
t
 
l
i
f
e
c
y
c
l
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




/
*
 
S
e
q
u
e
n
c
e
 
d
i
a
g
r
a
m
 
m
e
s
s
a
g
e
s
 
f
o
r
 
t
h
e
 
H
T
T
P
S
 
l
i
f
e
c
y
c
l
e
 
*
/


t
y
p
e
 
D
i
r
 
=
 
"
c
2
s
"
 
|
 
"
s
2
c
"
 
|
 
"
c
"
 
|
 
"
s
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
 
M
s
g
 
{


 
 
p
h
a
s
e
:
 
"
D
N
S
"
 
|
 
"
T
C
P
"
 
|
 
"
T
L
S
"
 
|
 
"
H
T
T
P
"
 
|
 
"
S
E
R
V
E
R
"
;


 
 
d
i
r
:
 
D
i
r
;
 
 
 
 
 
 
 
 
 
 
/
/
 
c
2
s
 
=
 
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
,
 
s
2
c
 
=
 
s
e
r
v
e
r
→
c
l
i
e
n
t
,
 
c
/
s
 
=
 
l
o
c
a
l
 
w
o
r
k


 
 
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
 
 
 
 
 
/
/
 
m
a
i
n
 
t
e
x
t
 
o
n
 
t
h
e
 
a
r
r
o
w


 
 
s
u
b
?
:
 
s
t
r
i
n
g
;
 
 
 
 
 
 
/
/
 
s
m
a
l
l
 
c
a
p
t
i
o
n
 
u
n
d
e
r
 
t
h
e
 
a
r
r
o
w


 
 
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
 
 
 
 
 
 
/
/
 
d
e
t
a
i
l
e
d
 
e
x
p
l
a
i
n
e
r
 
s
h
o
w
n
 
w
h
e
n
 
t
h
i
s
 
s
t
e
p
 
i
s
 
a
c
t
i
v
e


}




c
o
n
s
t
 
L
I
F
E
C
Y
C
L
E
_
M
S
G
S
:
 
M
s
g
[
]
 
=
 
[


 
 
{
 
p
h
a
s
e
:
 
"
D
N
S
"
,
 
 
d
i
r
:
 
"
c
"
,
 
 
 
l
a
b
e
l
:
 
"
D
N
S
 
l
o
o
k
u
p
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
:
 
"
n
a
m
e
 
→
 
I
P
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
 
a
s
k
s
 
t
h
e
 
O
S
 
s
t
u
b
 
r
e
s
o
l
v
e
r
 
f
o
r
 
t
h
e
 
I
P
 
o
f
 
t
h
e
 
h
o
s
t
n
a
m
e
.
 
U
s
u
a
l
l
y
 
c
a
c
h
e
 
h
i
t
 
-
 
a
 
f
e
w
 
m
s
.
 
C
a
c
h
e
 
m
i
s
s
 
c
a
n
 
a
d
d
 
3
0
–
1
2
0
 
m
s
.
"
 
}
,


 
 
{
 
p
h
a
s
e
:
 
"
T
C
P
"
,
 
 
d
i
r
:
 
"
c
2
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
S
Y
N
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
:
 
"
I
 
w
a
n
t
 
t
o
 
t
a
l
k
"
,
 
 
 
 
 
 
 
 
 
 
 
 
n
o
t
e
:
 
"
C
l
i
e
n
t
 
s
e
n
d
s
 
a
 
T
C
P
 
S
Y
N
 
t
o
 
o
p
e
n
 
a
 
r
e
l
i
a
b
l
e
 
p
i
p
e
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
 
f
i
r
s
t
 
p
a
c
k
e
t
 
t
h
a
t
 
a
c
t
u
a
l
l
y
 
t
r
a
v
e
l
s
 
t
h
e
 
w
i
r
e
 
f
o
r
 
t
h
i
s
 
c
o
n
n
e
c
t
i
o
n
.
"
 
}
,


 
 
{
 
p
h
a
s
e
:
 
"
T
C
P
"
,
 
 
d
i
r
:
 
"
s
2
c
"
,
 
l
a
b
e
l
:
 
"
S
Y
N
-
A
C
K
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
:
 
"
I
 
h
e
a
r
 
y
o
u
,
 
y
o
u
 
h
e
a
r
 
m
e
?
"
,
 
 
n
o
t
e
:
 
"
S
e
r
v
e
r
 
a
c
k
n
o
w
l
e
d
g
e
s
.
 
O
n
e
 
r
o
u
n
d
-
t
r
i
p
 
h
a
s
 
n
o
w
 
p
a
s
s
e
d
.
"
 
}
,


 
 
{
 
p
h
a
s
e
:
 
"
T
C
P
"
,
 
 
d
i
r
:
 
"
c
2
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
C
K
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
:
 
"
c
o
n
n
e
c
t
e
d
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
o
t
e
:
 
"
C
l
i
e
n
t
 
c
o
n
f
i
r
m
s
.
 
T
h
e
 
T
C
P
 
c
o
n
n
e
c
t
i
o
n
 
i
s
 
n
o
w
 
o
p
e
n
 
a
n
d
 
c
a
n
 
c
a
r
r
y
 
b
y
t
e
s
 
i
n
 
b
o
t
h
 
d
i
r
e
c
t
i
o
n
s
.
"
 
}
,


 
 
{
 
p
h
a
s
e
:
 
"
T
L
S
"
,
 
 
d
i
r
:
 
"
c
2
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
C
l
i
e
n
t
H
e
l
l
o
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
:
 
"
H
T
T
P
S
 
o
n
l
y
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
o
t
e
:
 
"
I
f
 
u
s
i
n
g
 
H
T
T
P
S
:
 
c
l
i
e
n
t
 
p
r
o
p
o
s
e
s
 
T
L
S
 
v
e
r
s
i
o
n
 
+
 
c
i
p
h
e
r
 
l
i
s
t
 
+
 
a
 
r
a
n
d
o
m
 
n
u
m
b
e
r
.
"
 
}
,


 
 
{
 
p
h
a
s
e
:
 
"
T
L
S
"
,
 
 
d
i
r
:
 
"
s
2
c
"
,
 
l
a
b
e
l
:
 
"
S
e
r
v
e
r
H
e
l
l
o
 
+
 
C
e
r
t
"
,
 
 
 
 
 
 
s
u
b
:
 
"
h
e
r
e
'
s
 
m
y
 
i
d
e
n
t
i
t
y
"
,
 
 
 
 
 
 
 
 
n
o
t
e
:
 
"
S
e
r
v
e
r
 
p
i
c
k
s
 
a
 
c
i
p
h
e
r
 
a
n
d
 
s
e
n
d
s
 
i
t
s
 
T
L
S
 
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
 
(
s
i
g
n
e
d
 
b
y
 
a
 
C
A
 
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
 
t
r
u
s
t
s
)
.
"
 
}
,


 
 
{
 
p
h
a
s
e
:
 
"
T
L
S
"
,
 
 
d
i
r
:
 
"
c
2
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
K
e
y
 
e
x
c
h
a
n
g
e
 
+
 
F
i
n
i
s
h
e
d
"
,
 
s
u
b
:
 
"
s
h
a
r
e
d
 
s
e
c
r
e
t
 
a
g
r
e
e
d
"
,
 
 
 
 
 
 
n
o
t
e
:
 
"
C
l
i
e
n
t
 
v
e
r
i
f
i
e
s
 
t
h
e
 
c
e
r
t
,
 
g
e
n
e
r
a
t
e
s
 
a
 
s
e
s
s
i
o
n
 
k
e
y
,
 
a
n
d
 
b
o
t
h
 
s
i
d
e
s
 
f
i
n
i
s
h
 
t
h
e
 
h
a
n
d
s
h
a
k
e
.
 
A
l
l
 
t
r
a
f
f
i
c
 
a
f
t
e
r
 
t
h
i
s
 
i
s
 
e
n
c
r
y
p
t
e
d
.
"
 
}
,


 
 
{
 
p
h
a
s
e
:
 
"
H
T
T
P
"
,
 
d
i
r
:
 
"
c
2
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
H
T
T
P
 
R
e
q
u
e
s
t
"
,
 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
:
 
"
P
O
S
T
 
/
l
o
g
i
n
 
+
 
h
e
a
d
e
r
s
"
,
 
 
 
 
 
n
o
t
e
:
 
"
N
O
W
 
t
h
e
 
a
c
t
u
a
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
 
f
l
i
e
s
 
o
v
e
r
 
t
h
e
 
e
n
c
r
y
p
t
e
d
 
s
o
c
k
e
t
:
 
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
 
b
o
d
y
.
"
 
}
,


 
 
{
 
p
h
a
s
e
:
 
"
S
E
R
V
E
R
"
,
 
d
i
r
:
 
"
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
S
e
r
v
e
r
 
p
r
o
c
e
s
s
e
s
"
,
 
 
 
 
 
 
 
 
s
u
b
:
 
"
a
u
t
h
 
→
 
D
B
 
→
 
r
e
s
p
o
n
s
e
"
,
 
 
 
 
 
 
n
o
t
e
:
 
"
R
o
u
t
i
n
g
,
 
m
i
d
d
l
e
w
a
r
e
,
 
b
u
s
i
n
e
s
s
 
l
o
g
i
c
,
 
D
B
/
c
a
c
h
e
 
r
e
a
d
s
,
 
r
e
s
p
o
n
s
e
 
b
u
i
l
d
.
 
T
h
i
s
 
i
s
 
w
h
e
r
e
 
y
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
 
c
o
d
e
 
l
i
v
e
s
.
"
 
}
,


 
 
{
 
p
h
a
s
e
:
 
"
H
T
T
P
"
,
 
d
i
r
:
 
"
s
2
c
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
T
T
P
 
R
e
s
p
o
n
s
e
"
,
 
 
 
 
 
 
 
 
 
 
 
s
u
b
:
 
"
2
0
0
 
O
K
 
+
 
J
S
O
N
/
H
T
M
L
"
,
 
 
 
 
 
 
 
 
n
o
t
e
:
 
"
S
t
a
t
u
s
 
c
o
d
e
 
+
 
r
e
s
p
o
n
s
e
 
h
e
a
d
e
r
s
 
+
 
b
o
d
y
 
c
o
m
e
 
b
a
c
k
.
 
B
r
o
w
s
e
r
 
p
a
r
s
e
s
,
 
p
a
i
n
t
s
,
 
r
u
n
s
 
J
a
v
a
S
c
r
i
p
t
,
 
l
o
a
d
s
 
s
u
b
r
e
s
o
u
r
c
e
s
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
 
P
H
A
S
E
_
C
O
L
O
R
S
:
 
R
e
c
o
r
d
<
M
s
g
[
"
p
h
a
s
e
"
]
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


 
 
D
N
S
:
 
 
 
 
"
#
6
4
7
4
8
b
"
,


 
 
T
C
P
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


 
 
T
L
S
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


 
 
H
T
T
P
:
 
 
 
S
D
,


 
 
S
E
R
V
E
R
:
 
"
#
0
e
a
5
e
9
"
,


}
;




f
u
n
c
t
i
o
n
 
L
i
f
e
c
y
c
l
e
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
0
)
;
 
 
/
/
 
0
.
.
L
I
F
E
C
Y
C
L
E
_
M
S
G
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
 
L
I
F
E
C
Y
C
L
E
_
M
S
G
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
 
L
I
F
E
C
Y
C
L
E
_
M
S
G
S
[
s
t
e
p
]
;




 
 
c
o
n
s
t
 
r
e
q
 
=
 
[


 
 
 
 
{
 
k
:
 
"
S
t
a
r
t
-
l
i
n
e
"
,
 
v
:
 
"
P
O
S
T
 
/
a
p
i
/
l
o
g
i
n
 
H
T
T
P
/
1
.
1
"
 
}
,


 
 
 
 
{
 
k
:
 
"
H
o
s
t
"
,
 
v
:
 
"
a
p
i
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
"
 
}
,


 
 
 
 
{
 
k
:
 
"
C
o
n
t
e
n
t
-
T
y
p
e
"
,
 
v
:
 
"
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
/
j
s
o
n
"
 
}
,


 
 
 
 
{
 
k
:
 
"
A
u
t
h
o
r
i
z
a
t
i
o
n
"
,
 
v
:
 
"
B
e
a
r
e
r
 
e
y
J
h
b
G
c
.
.
.
"
 
}
,


 
 
 
 
{
 
k
:
 
"
B
o
d
y
"
,
 
v
:
 
'
{
 
"
e
m
a
i
l
"
:
 
"
a
@
b
.
c
o
m
"
,
 
"
p
a
s
s
w
o
r
d
"
:
 
"
*
*
*
"
 
}
'
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
r
e
s
p
 
=
 
[


 
 
 
 
{
 
k
:
 
"
S
t
a
t
u
s
 
l
i
n
e
"
,
 
v
:
 
"
H
T
T
P
/
1
.
1
 
2
0
0
 
O
K
"
 
}
,


 
 
 
 
{
 
k
:
 
"
C
o
n
t
e
n
t
-
T
y
p
e
"
,
 
v
:
 
"
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
/
j
s
o
n
"
 
}
,


 
 
 
 
{
 
k
:
 
"
S
e
t
-
C
o
o
k
i
e
"
,
 
v
:
 
"
s
e
s
s
i
o
n
=
a
b
c
1
2
3
;
 
H
t
t
p
O
n
l
y
;
 
S
e
c
u
r
e
"
 
}
,


 
 
 
 
{
 
k
:
 
"
C
a
c
h
e
-
C
o
n
t
r
o
l
"
,
 
v
:
 
"
n
o
-
s
t
o
r
e
"
 
}
,


 
 
 
 
{
 
k
:
 
"
B
o
d
y
"
,
 
v
:
 
'
{
 
"
u
s
e
r
I
d
"
:
 
4
2
,
 
"
t
o
k
e
n
"
:
 
"
x
y
z
.
.
.
"
 
}
'
 
}
,


 
 
]
;




 
 
/
*
 
S
e
q
u
e
n
c
e
 
d
i
a
g
r
a
m
 
l
a
y
o
u
t
 
*
/


 
 
c
o
n
s
t
 
L
A
N
E
_
Y
0
 
=
 
4
4
;
 
 
 
 
 
 
 
 
 
 
/
/
 
f
i
r
s
t
 
m
e
s
s
a
g
e
 
y


 
 
c
o
n
s
t
 
L
A
N
E
_
D
Y
 
=
 
3
6
;
 
 
 
 
 
 
 
 
 
 
 
/
/
 
y
 
s
p
a
c
i
n
g
 
p
e
r
 
m
e
s
s
a
g
e


 
 
c
o
n
s
t
 
L
A
N
E
_
X
_
C
L
I
E
N
T
 
=
 
9
0
;


 
 
c
o
n
s
t
 
L
A
N
E
_
X
_
S
E
R
V
E
R
 
=
 
5
1
0
;




 
 
c
o
n
s
t
 
s
v
g
H
 
=
 
L
A
N
E
_
Y
0
 
+
 
L
I
F
E
C
Y
C
L
E
_
M
S
G
S
.
l
e
n
g
t
h
 
*
 
L
A
N
E
_
D
Y
 
+
 
3
0
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
0
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
L
I
F
E
C
Y
C
L
E
_
M
S
G
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
T
h
e
 
f
u
l
l
 
r
o
u
n
d
 
t
r
i
p
:
 
D
N
S
 
→
 
T
C
P
 
→
 
T
L
S
 
→
 
H
T
T
P
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
 
s
i
n
g
l
e
 
c
l
i
c
k
 
t
r
i
g
g
e
r
s
 
~
1
0
 
m
e
s
s
a
g
e
s
 
a
c
r
o
s
s
 
t
h
e
 
n
e
t
w
o
r
k
.
 
M
o
s
t
 
o
f
 
t
h
e
m
 
f
i
n
i
s
h
 
i
n
 
a
 
b
l
i
n
k
,
 
b
u
t


 
 
 
 
 
 
 
 
u
n
d
e
r
s
t
a
n
d
i
n
g
 
<
e
m
>
w
h
i
c
h
<
/
e
m
>
 
a
r
e
 
t
h
e
r
e
 
-
 
a
n
d
 
i
n
 
w
h
a
t
 
o
r
d
e
r
 
-
 
i
s
 
h
o
w
 
y
o
u
 
r
e
a
s
o
n
 
a
b
o
u
t
 
l
a
t
e
n
c
y
,


 
 
 
 
 
 
 
 
r
e
t
r
i
e
s
,
 
a
n
d
 
s
e
c
u
r
i
t
y
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
2
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
 
L
I
F
E
C
Y
C
L
E
_
M
S
G
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
0
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
 
L
I
F
E
C
Y
C
L
E
_
M
S
G
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
 
0
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
 
0
 
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
 
0
 
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
 
L
I
F
E
C
Y
C
L
E
_
M
S
G
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
 
L
I
F
E
C
Y
C
L
E
_
M
S
G
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
 
L
I
F
E
C
Y
C
L
E
_
M
S
G
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
0
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


 
 
 
 
 
 
 
 
 
 
M
e
s
s
a
g
e
 
{
s
t
e
p
 
+
 
1
}
 
/
 
{
L
I
F
E
C
Y
C
L
E
_
M
S
G
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
e
q
u
e
n
c
e
 
d
i
a
g
r
a
m
 
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
 
"
1
8
p
x
 
1
8
p
x
 
1
4
p
x
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
8
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
{
`
0
 
0
 
7
0
0
 
$
{
s
v
g
H
}
`
}
 
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
 
s
v
g
H
 
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
l
c
A
r
r
R
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
"
c
u
r
r
e
n
t
C
o
l
o
r
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
l
c
A
r
r
L
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
2
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
9
,
0
 
L
0
,
4
.
5
 
L
9
,
9
 
z
"
 
f
i
l
l
=
"
c
u
r
r
e
n
t
C
o
l
o
r
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
/
d
e
f
s
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
L
A
N
E
_
X
_
C
L
I
E
N
T
 
-
 
6
0
}
 
y
=
"
6
"
 
w
i
d
t
h
=
"
1
2
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
2
6
"
 
r
x
=
"
6
"


 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
#
6
3
6
6
f
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
L
A
N
E
_
X
_
C
L
I
E
N
T
}
 
y
=
"
2
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
6
e
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
C
L
I
E
N
T


 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
L
A
N
E
_
X
_
S
E
R
V
E
R
 
-
 
6
0
}
 
y
=
"
6
"
 
w
i
d
t
h
=
"
1
2
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
2
6
"
 
r
x
=
"
6
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
t
e
x
t
 
x
=
{
L
A
N
E
_
X
_
S
E
R
V
E
R
}
 
y
=
"
2
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
6
e
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
S
E
R
V
E
R


 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
L
i
f
e
l
i
n
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
L
A
N
E
_
X
_
C
L
I
E
N
T
}
 
y
1
=
"
3
4
"
 
x
2
=
{
L
A
N
E
_
X
_
C
L
I
E
N
T
}
 
y
2
=
{
s
v
g
H
 
-
 
1
0
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
"
#
6
3
6
6
f
1
"
 
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
2
,
4
"
 
o
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
5
5
"
 
/
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
L
A
N
E
_
X
_
S
E
R
V
E
R
}
 
y
1
=
"
3
4
"
 
x
2
=
{
L
A
N
E
_
X
_
S
E
R
V
E
R
}
 
y
2
=
{
s
v
g
H
 
-
 
1
0
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
2
,
4
"
 
o
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
5
5
"
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
M
e
s
s
a
g
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
L
I
F
E
C
Y
C
L
E
_
M
S
G
S
.
m
a
p
(
(
m
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
 
y
 
=
 
L
A
N
E
_
Y
0
 
+
 
i
 
*
 
L
A
N
E
_
D
Y
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
a
s
t
 
=
 
i
 
<
 
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
 
c
o
l
o
r
 
=
 
P
H
A
S
E
_
C
O
L
O
R
S
[
m
.
p
h
a
s
e
]
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
o
p
a
c
i
t
y
 
=
 
a
c
t
i
v
e
 
?
 
1
 
:
 
p
a
s
t
 
?
 
0
.
5
5
 
:
 
0
.
2
;


 
 
 
 
 
 
 
 
 
 
 
 
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
o
l
o
r
 
=
 
a
c
t
i
v
e
 
?
 
c
o
l
o
r
 
:
 
p
a
s
t
 
?
 
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
;




 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
m
.
d
i
r
 
=
=
=
 
"
c
2
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
i
}
 
o
p
a
c
i
t
y
=
{
o
p
a
c
i
t
y
}
 
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
 
}
}
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
L
A
N
E
_
X
_
C
L
I
E
N
T
 
+
 
4
}
 
y
1
=
{
y
}
 
x
2
=
{
L
A
N
E
_
X
_
S
E
R
V
E
R
 
-
 
4
}
 
y
2
=
{
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
{
a
c
t
i
v
e
 
?
 
2
.
2
5
 
:
 
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
c
A
r
r
R
)
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
(
L
A
N
E
_
X
_
C
L
I
E
N
T
 
+
 
L
A
N
E
_
X
_
S
E
R
V
E
R
)
 
/
 
2
}
 
y
=
{
y
 
-
 
5
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
1
0
.
5
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
l
a
b
e
l
C
o
l
o
r
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
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
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
.
s
u
b
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
(
L
A
N
E
_
X
_
C
L
I
E
N
T
 
+
 
L
A
N
E
_
X
_
S
E
R
V
E
R
)
 
/
 
2
}
 
y
=
{
y
 
+
 
1
3
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
9
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
m
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
h
a
s
e
 
t
a
g
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
8
}
 
y
=
{
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
3
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
{
`
$
{
c
o
l
o
r
}
1
a
`
}
 
s
t
r
o
k
e
=
{
`
$
{
c
o
l
o
r
}
6
6
`
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
2
7
}
 
y
=
{
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
8
.
5
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
m
.
p
h
a
s
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
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
 
d
o
t
 
o
n
 
a
c
t
i
v
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
r
=
"
6
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
0
.
9
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
L
A
N
E
_
X
_
C
L
I
E
N
T
 
+
 
4
}
 
$
{
y
}
 
L
 
$
{
L
A
N
E
_
X
_
S
E
R
V
E
R
 
-
 
4
}
 
$
{
y
}
`
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
c
i
r
c
l
e
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


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
m
.
d
i
r
 
=
=
=
 
"
s
2
c
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
i
}
 
o
p
a
c
i
t
y
=
{
o
p
a
c
i
t
y
}
 
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
 
}
}
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
L
A
N
E
_
X
_
S
E
R
V
E
R
 
-
 
4
}
 
y
1
=
{
y
}
 
x
2
=
{
L
A
N
E
_
X
_
C
L
I
E
N
T
 
+
 
4
}
 
y
2
=
{
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
{
a
c
t
i
v
e
 
?
 
2
.
2
5
 
:
 
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
c
A
r
r
R
)
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
(
L
A
N
E
_
X
_
C
L
I
E
N
T
 
+
 
L
A
N
E
_
X
_
S
E
R
V
E
R
)
 
/
 
2
}
 
y
=
{
y
 
-
 
5
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
1
0
.
5
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
l
a
b
e
l
C
o
l
o
r
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
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
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
.
s
u
b
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
(
L
A
N
E
_
X
_
C
L
I
E
N
T
 
+
 
L
A
N
E
_
X
_
S
E
R
V
E
R
)
 
/
 
2
}
 
y
=
{
y
 
+
 
1
3
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
9
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
m
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
8
}
 
y
=
{
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
3
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
{
`
$
{
c
o
l
o
r
}
1
a
`
}
 
s
t
r
o
k
e
=
{
`
$
{
c
o
l
o
r
}
6
6
`
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
2
7
}
 
y
=
{
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
8
.
5
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
m
.
p
h
a
s
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
r
=
"
6
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
0
.
9
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
L
A
N
E
_
X
_
S
E
R
V
E
R
 
-
 
4
}
 
$
{
y
}
 
L
 
$
{
L
A
N
E
_
X
_
C
L
I
E
N
T
 
+
 
4
}
 
$
{
y
}
`
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
c
i
r
c
l
e
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


 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
L
o
c
a
l
 
w
o
r
k
 
(
c
l
i
e
n
t
 
o
r
 
s
e
r
v
e
r
)


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
l
i
e
n
t
 
=
 
m
.
d
i
r
 
=
=
=
 
"
c
"
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
 
=
 
i
s
C
l
i
e
n
t
 
?
 
L
A
N
E
_
X
_
C
L
I
E
N
T
 
:
 
L
A
N
E
_
X
_
S
E
R
V
E
R
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
i
}
 
o
p
a
c
i
t
y
=
{
o
p
a
c
i
t
y
}
 
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
 
}
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
x
 
-
 
8
8
}
 
y
=
{
y
 
-
 
1
2
}
 
w
i
d
t
h
=
"
1
7
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
2
4
"
 
r
x
=
"
5
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
`
$
{
c
o
l
o
r
}
1
4
`
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
2
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
x
}
 
y
=
{
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
1
0
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
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
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
8
}
 
y
=
{
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
5
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
4
"
 
f
i
l
l
=
{
`
$
{
c
o
l
o
r
}
1
a
`
}
 
s
t
r
o
k
e
=
{
`
$
{
c
o
l
o
r
}
6
6
`
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
3
6
}
 
y
=
{
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
8
.
5
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
m
.
p
h
a
s
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
c
x
=
{
x
}
 
c
y
=
{
y
}
 
r
=
"
2
2
"
 
f
i
l
l
=
"
n
o
n
e
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
 
o
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
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
n
i
m
a
t
e
 
a
t
t
r
i
b
u
t
e
N
a
m
e
=
"
r
"
 
f
r
o
m
=
"
1
0
"
 
t
o
=
"
2
6
"
 
d
u
r
=
"
0
.
9
s
"
 
r
e
p
e
a
t
C
o
u
n
t
=
"
i
n
d
e
f
i
n
i
t
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
n
i
m
a
t
e
 
a
t
t
r
i
b
u
t
e
N
a
m
e
=
"
o
p
a
c
i
t
y
"
 
f
r
o
m
=
"
0
.
8
"
 
t
o
=
"
0
"
 
d
u
r
=
"
0
.
9
s
"
 
r
e
p
e
a
t
C
o
u
n
t
=
"
i
n
d
e
f
i
n
i
t
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
c
i
r
c
l
e
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


 
 
 
 
 
 
 
 
<
/
s
v
g
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
 
C
a
p
t
i
o
n
 
f
o
r
 
c
u
r
r
e
n
t
 
s
t
e
p
 
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
B
o
t
t
o
m
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
P
H
A
S
E
_
C
O
L
O
R
S
[
c
u
r
r
e
n
t
.
p
h
a
s
e
]
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
P
H
A
S
E
_
C
O
L
O
R
S
[
c
u
r
r
e
n
t
.
p
h
a
s
e
]
}
0
e
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
 
4
 
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
 
8
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


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
2
p
x
 
7
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
 
4
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
 
P
H
A
S
E
_
C
O
L
O
R
S
[
c
u
r
r
e
n
t
.
p
h
a
s
e
]
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
p
h
a
s
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
5
 
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


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
D
u
a
l
 
r
e
q
u
e
s
t
/
r
e
s
p
o
n
s
e
 
c
a
r
d
 
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
R
E
Q
U
E
S
T
"
,
 
i
c
o
n
:
 
<
S
e
n
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
 
r
o
w
s
:
 
r
e
q
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
E
S
P
O
N
S
E
"
,
 
i
c
o
n
:
 
<
I
n
b
o
x
 
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
 
r
o
w
s
:
 
r
e
s
p
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
a
r
d
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
a
r
d
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
a
r
d
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
 
`
$
{
c
a
r
d
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
 
g
a
p
:
 
8
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
c
a
r
d
.
c
o
l
o
r
}
`
 
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
a
r
d
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
c
a
r
d
.
i
c
o
n
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
2
r
e
m
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
1
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
a
r
d
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
 
8
0
0
 
}
}
>
{
c
a
r
d
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
0
p
x
 
1
4
p
x
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
a
r
d
.
r
o
w
s
.
m
a
p
(
(
r
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
r
.
k
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
 
0
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
a
r
d
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
{
r
.
k
}
:
 
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
 
w
o
r
d
B
r
e
a
k
:
 
"
b
r
e
a
k
-
a
l
l
"
 
}
}
>
{
r
.
v
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
C
l
i
e
n
t
S
e
r
v
e
r
H
T
T
P
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
n
a
t
o
m
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
A
n
a
t
o
m
y
"
,
 
i
c
o
n
:
 
<
N
e
t
w
o
r
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
A
n
a
t
o
m
y
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
m
e
t
h
o
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
M
e
t
h
o
d
s
 
&
 
S
t
a
t
u
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
o
d
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
M
e
t
h
o
d
s
A
n
d
S
t
a
t
u
s
 
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
i
f
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
R
e
a
l
 
L
i
f
e
c
y
c
l
e
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
T
e
x
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
L
i
f
e
c
y
c
l
e
 
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
i
c
h
 
H
T
T
P
 
m
e
t
h
o
d
 
i
s
 
s
a
f
e
 
A
N
D
 
i
d
e
m
p
o
t
e
n
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
P
O
S
T
"
,
 
"
G
E
T
"
,
 
"
P
A
T
C
H
"
,
 
"
D
E
L
E
T
E
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
G
E
T
 
i
s
 
s
a
f
e
 
(
n
o
 
s
i
d
e
 
e
f
f
e
c
t
s
)
 
a
n
d
 
i
d
e
m
p
o
t
e
n
t
 
(
s
a
m
e
 
r
e
s
u
l
t
 
o
n
 
r
e
t
r
y
)
.
 
D
E
L
E
T
E
 
i
s
 
i
d
e
m
p
o
t
e
n
t
 
b
u
t
 
n
o
t
 
s
a
f
e
.
 
P
O
S
T
 
i
s
 
n
e
i
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
A
 
c
l
i
e
n
t
 
g
e
t
s
 
a
 
`
4
0
1
 
U
n
a
u
t
h
o
r
i
z
e
d
`
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
 
s
e
r
v
e
r
 
c
r
a
s
h
e
d
.
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
u
r
c
e
 
d
o
e
s
 
n
o
t
 
e
x
i
s
t
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
c
l
i
e
n
t
 
i
s
 
n
o
t
 
a
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
 
-
 
n
e
e
d
s
 
t
o
 
l
o
g
 
i
n
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
r
a
t
e
 
l
i
m
i
t
 
w
a
s
 
e
x
c
e
e
d
e
d
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
4
0
1
 
=
 
'
w
h
o
 
a
r
e
 
y
o
u
?
'
 
(
a
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
i
o
n
 
m
i
s
s
i
n
g
 
o
r
 
i
n
v
a
l
i
d
)
.
 
4
0
3
 
=
 
'
I
 
k
n
o
w
 
y
o
u
,
 
b
u
t
 
n
o
.
'
 
4
0
4
 
=
 
'
n
o
t
 
f
o
u
n
d
.
'
 
4
2
9
 
=
 
'
t
o
o
 
m
a
n
y
 
r
e
q
u
e
s
t
s
.
'
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
 
d
o
e
s
 
`
5
x
x
`
 
s
t
a
t
u
s
 
c
o
d
e
s
 
s
i
g
n
a
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
S
u
c
c
e
s
s
"
,
 
"
C
l
i
e
n
t
 
m
i
s
t
a
k
e
"
,
 
"
S
e
r
v
e
r
-
s
i
d
e
 
f
a
i
l
u
r
e
"
,
 
"
R
e
d
i
r
e
c
t
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
5
x
x
 
=
 
t
h
e
 
s
e
r
v
e
r
 
k
n
o
w
s
 
i
t
 
m
e
s
s
e
d
 
u
p
.
 
4
x
x
 
=
 
t
h
e
 
c
l
i
e
n
t
 
s
e
n
t
 
s
o
m
e
t
h
i
n
g
 
b
a
d
.
 
F
l
i
p
p
i
n
g
 
t
h
e
s
e
 
i
n
 
a
 
d
e
b
u
g
 
s
e
s
s
i
o
n
 
w
a
s
t
e
s
 
h
o
u
r
s
 
-
 
m
e
m
o
r
i
z
e
 
t
h
e
 
b
a
n
d
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
W
h
i
c
h
 
o
f
 
t
h
e
s
e
 
i
s
 
N
O
T
 
p
a
r
t
 
o
f
 
a
 
p
l
a
i
n
 
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
 
(
n
o
 
T
L
S
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
 
r
e
s
o
l
v
e
 
t
h
e
 
h
o
s
t
n
a
m
e
"
,
 
"
T
C
P
 
h
a
n
d
s
h
a
k
e
 
w
i
t
h
 
t
h
e
 
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
L
S
 
h
a
n
d
s
h
a
k
e
 
t
o
 
e
n
c
r
y
p
t
 
t
h
e
 
c
h
a
n
n
e
l
"
,
 
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
 
l
i
n
e
 
+
 
h
e
a
d
e
r
s
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
T
L
S
 
i
s
 
o
n
l
y
 
i
n
 
H
T
T
P
S
.
 
P
l
a
i
n
 
H
T
T
P
 
i
s
 
D
N
S
 
→
 
T
C
P
 
→
 
s
e
n
d
 
r
e
q
u
e
s
t
 
→
 
g
e
t
 
r
e
s
p
o
n
s
e
,
 
n
o
 
e
n
c
r
y
p
t
i
o
n
 
l
a
y
e
r
.
 
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
 
r
e
u
s
e
 
c
a
n
 
s
k
i
p
 
D
N
S
/
T
C
P
 
o
n
 
s
u
b
s
e
q
u
e
n
t
 
r
e
q
u
e
s
t
s
,
 
b
u
t
 
T
L
S
 
i
s
 
t
h
e
 
o
n
e
 
t
h
a
t
 
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
 
p
a
r
t
 
o
f
 
H
T
T
P
 
a
t
 
a
l
l
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
 
s
h
o
p
 
w
a
n
t
s
 
&
l
d
q
u
o
;
c
r
e
a
t
e
 
a
 
n
e
w
 
o
r
d
e
r
.
&
r
d
q
u
o
;
 
W
h
i
c
h
 
m
e
t
h
o
d
 
f
i
t
s
 
b
e
s
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
G
E
T
 
/
o
r
d
e
r
s
"
,
 
"
P
O
S
T
 
/
o
r
d
e
r
s
"
,
 
"
P
U
T
 
/
o
r
d
e
r
s
"
,
 
"
D
E
L
E
T
E
 
/
o
r
d
e
r
s
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
P
O
S
T
 
c
r
e
a
t
e
s
 
a
 
n
e
w
 
r
e
s
o
u
r
c
e
 
a
t
 
a
 
c
o
l
l
e
c
t
i
o
n
 
U
R
L
.
 
U
s
e
 
P
U
T
 
w
h
e
n
 
y
o
u
 
k
n
o
w
 
t
h
e
 
e
x
a
c
t
 
U
R
L
 
o
f
 
t
h
e
 
i
t
e
m
 
y
o
u
 
w
a
n
t
 
t
o
 
r
e
p
l
a
c
e
 
(
e
.
g
.
,
 
P
U
T
 
/
o
r
d
e
r
s
/
4
2
)
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
C
l
i
e
n
t
-
S
e
r
v
e
r
 
&
 
H
T
T
P
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
1
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
E
v
e
r
y
 
w
e
b
 
s
y
s
t
e
m
 
i
n
t
e
r
v
i
e
w
 
a
s
s
u
m
e
s
 
y
o
u
 
k
n
o
w
 
t
h
i
s
 
c
o
l
d
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


